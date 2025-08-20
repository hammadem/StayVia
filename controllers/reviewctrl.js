const Review = require("../models/Review");
const Listing = require("../models/Listing");
const flash = require ('connect-flash');

let createReview = async (req,res,next)=>{
    if (!req.body) throw new ExpressError (400,"send valid & complete data");
    let {review} = req.body;
    let {id} = req.params;
    let newReview = new Review ({
        ...review, author: res.locals.currUser._id
    });
    await newReview.save();
    let result = await Listing.findByIdAndUpdate(id,{$push: {reviews: newReview._id}});
    console.log(result);
    req.flash ('success','Review Posted !');
    res.redirect(`/listings/${id}/`);
}

let deleteReview = async(req,res,next)=>{
    let {id,reviewId} = req.params;
    await Review.findByIdAndDelete (reviewId);
    let result = await Listing.findByIdAndUpdate(id,{$pull: {reviews: reviewId}});
    console.log(result);
    console.log ("review deleted");
    res.redirect(`/listings/${id}/`);
}

module.exports = {createReview,deleteReview}