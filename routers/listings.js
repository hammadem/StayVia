const express = require ('express');
const router = express.Router();
const Listing = require("../models/Listing");
const Review = require("../models/Review");
const wrapAsync = require ("../utils/wrapAsync");
const ExpressError = require ("../utils/ExpressError");
const passport = require('passport');
const {isloggedin, isOwner, validateSchema} = require ('../middlewares.js');
const {index,renderNew,createNew,showListing,renderEdit,editListing,deleteListing,categoryFilter,searchListings} = require ('../controllers/listingctrl.js');
const multer  = require('multer');
const {storage, delImageCloudinary} = require('../Cloud_Config.js');
const upload = multer({ storage });

router
.route('/')
    .get (wrapAsync (index)) // Index Route
    .post (isloggedin, validateSchema, upload.single('listing[image]'), wrapAsync (createNew)); //Create Route

router
    .post ('/search', searchListings);

router
    .get ('/new', isloggedin, renderNew); // New


router
.route ('/:id')
    .get (wrapAsync (showListing)) // Show Route
    .put (isloggedin, isOwner, upload.single('listing[image]'), wrapAsync (editListing)) //Update Route
    .delete (isloggedin, isOwner, delImageCloudinary, wrapAsync (deleteListing)); // Delete Route

router
    .get ('/:id/edit', isloggedin, wrapAsync (renderEdit)); // Edit

router
    .get('/category/:categoryName', categoryFilter); // Category Filter

module.exports = router;