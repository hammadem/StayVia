let Listing = require ('../models/Listing');
const flash = require ('connect-flash');
const mbxClient = require('@mapbox/mapbox-sdk');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const baseClient = mbxClient({ accessToken: process.env.MAP_TOKEN });
const geocodingClient = mbxGeocoding(baseClient);
const ExpressError = require ("../utils/ExpressError");

let index = async (req,res,next)=>{
    let listPresent = await Listing.find({});
    res.render('index.ejs',{listPresent});
}

let renderNew = (req,res)=>{
    res.render('new.ejs');
}

let createNew = async (req,res,next)=>{
    if (!req.body) throw new ExpressError (400,"send valid & complete data");
    
    if (req.file) {
        url = req.file.path;
        filename = req.file.filename;
    }

    let {listing} = req.body;
    console.log (req.body.listing);
    const newListing = new Listing (({
        ...listing, owner: req.user._id
    }));

    if (req.file) {
        newListing.image = {url,filename};
    }

    let response = await geocodingClient.forwardGeocode({
        query: newListing.location,
        limit: 1,
      })
    .send();
    newListing.geometry = response.body.features[0].geometry;
    await newListing.save();
    console.log (newListing);
    req.flash ('success','New Listing Created !');
    res.redirect('/listings');
}

let showListing = async (req,res,next)=>{
    let {id} = req.params;
    let listingDet = await Listing.findById(id).populate({path: 'reviews', populate: {path: 'author', model: 'User',}}).populate('owner');
    if (!listingDet) {
        req.flash ('error',"The listing you requested does not exist");
        res.redirect('/listings');
    }
    res.render ('show.ejs',{listingDet});
}

let renderEdit = async (req,res,next)=>{

    let {id}=req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
        req.flash ('error',"The listing you requested does not exist");
        res.redirect('/listings');
    }
    let originalURl = listing.image.url;
    originalURl=originalURl.replace("/upload/","/upload/h_200,w_250/e_blur:10/");
    let categories = ['Homestays','Beachfront','Resorts','Mountains','City Apartments','Amazing Pools','Farms','Arctic','Camping'];
    res.render ('edit.ejs',{listing,originalURl,categories});
}

let editListing = async (req,res,next)=>{
    if (!req.body) throw new ExpressError (400,"send valid & complete data");

    let {id}=req.params;
    let initialListing = await Listing.findById(id);
    if (typeof req.file !== "undefined") {
        url = req.file.path;
        filename = req.file.filename;
    }
    else {
        url = initialListing.image.url;
        filename = initialListing.image.filename;
    }

    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
      })
    .send();
    
    let updatedGeometry = response.body.features[0].geometry;

    let updatedListing = await Listing.findByIdAndUpdate(
        id,
        {
            ...req.body.listing,
            image: {url,filename},
            geometry: updatedGeometry,
        }
    );
    console.log (updatedListing);
    req.flash ('success','Listing Updated !');
    res.redirect(`/listings/${id}`);
}

let deleteListing = async (req,res,next)=>{
    let {id}=req.params;
    let listingDel = await Listing.findByIdAndDelete(id);
    req.flash ('success','Listing Deleted !');
    res.redirect('/listings');
}

let categoryFilter = async (req,res,next)=>{
    let {categoryName} = req.params;
    let listPresent = await Listing.find ({category: `${categoryName}`});
    if (listPresent.length === 0) {
        req.flash ('error','No Listing in this Category');
        res.redirect ('/listings');
    }
    else {
        res.render('index.ejs',{listPresent});
    }
}

let searchListings = async(req,res,next)=>{
    let {destination} = req.body;
    let response = await geocodingClient.forwardGeocode({
        query: destination,
        limit: 3,
      })
    .send();
    let coordinatesGeo = [response.body.features[0].geometry,response.body.features[1].geometry,response.body.features[2].geometry];
    let listPresent = await Listing.find({ 
        $or: [
        { geometry: coordinatesGeo[0] },
        { geometry: coordinatesGeo[1] },
        { geometry: coordinatesGeo[2] }
    ]
    });
    console.log (listPresent);
    if (listPresent.length === 0) {
        req.flash ('error',`Sorry, we couldn’t find any listings for this destination. Try another location or broaden your search.`);
        res.redirect ('/listings');
    }
    else {
        res.render ('index.ejs',{listPresent});
    }
}

module.exports = {index,renderNew,createNew,showListing,renderEdit,editListing,deleteListing,categoryFilter,searchListings}