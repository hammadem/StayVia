const express = require ('express');
const wrapAsync = require ("../utils/wrapAsync");
const passport = require('passport');
const router = express.Router();
const {redirectURL} = require ('../middlewares.js');
const {connection} = require('mongoose');
let {signUpRender,createUser,loginRender,loginUser,logoutUser} = require ('../controllers/userctrl.js');

// SignUp User
router
.route ('/signup')
    .get (signUpRender)
    .post (wrapAsync(createUser));

// Login User
router
.route ('/login')
    .get (loginRender)
    .post(redirectURL, passport.authenticate('local',
        {failureRedirect: '/login',failureFlash: true}),
        loginUser
    );

// Logout User
router.get ('/logout', logoutUser);

module.exports = router;