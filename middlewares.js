const Listing = require("./models/Listing");
const Review = require("./models/Review.js");
const {reviewSchema, listingSchema} = require ("./schema.js");

let isloggedin = (req,res,next)=>{
    req.session.path = req.originalUrl;
    req.session.prepath = req.path;
    req.session.baseUrl = req.baseUrl;
    console.log(req.originalUrl);
    if (!req.isAuthenticated()) {
        req.flash ('error','you must be logged in to perform this action');
        res.redirect ('/login');
    }
    else {
        next ();
    }
}

let redirectURL = (req,res,next)=>{
    res.locals.path = req.session.path;
    res.locals.prepath = req.session.prepath;
    res.locals.baseUrl = req.session.baseUrl;
    next();
}

let isOwner = async (req,res,next)=>{
    let {id}=req.params;
    let listingFound = await Listing.findById (id);  
    if (!listingFound.owner.equals(res.locals.currUser._id)) {
        req.flash('error',"you're not the owner of this Listing");
        return (res.redirect(`/listings/${id}`));
    }
    next ();
}

let validateReview = (req,res,next)=>{
    let {error} = reviewSchema.validate (req.body);
    if  (error) {
        let errorMsg = error.details.map ((el)=>el.message). join(',');
        throw new ExpressError (400,errorMsg);
    }
    else {
        next ();
    }
}

let validateSchema = (req,res,next)=>{
    let {error} = listingSchema.validate (req.body);
    if  (error) {
        let errorMsg = error.details.map ((el)=>el.message). join(',');
        throw new ExpressError (400,errorMsg);
    }
    else {
        next ();
    }
}

let isAuthor = async (req,res,next)=>{
    let {reviewId,id}=req.params;
    let reviewFound = await Review.findById (reviewId);  
    if (!reviewFound.author.equals(res.locals.currUser._id)) {
        req.flash('error',"you're not the author of this Review");
        return (res.redirect(`/listings/${id}`));
    }
    next ();
}

module.exports = {isloggedin, redirectURL, isOwner, validateReview, validateSchema, isAuthor};