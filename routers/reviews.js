const express = require ('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require ("../utils/wrapAsync");
const ExpressError = require ("../utils/ExpressError");
const passport = require('passport');
const {isloggedin,validateReview,isAuthor} = require ('../middlewares.js');
const {createReview,deleteReview} = require ('../controllers/reviewctrl.js');

router
    .post ('/review', isloggedin, validateReview, wrapAsync (createReview)); // Review Create

router
    .delete ('/reviews/:reviewId', isloggedin, isAuthor, wrapAsync(deleteReview)); // Review Delete

module.exports = router;