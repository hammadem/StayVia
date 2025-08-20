const User = require('../models/User');
const flash = require ('connect-flash');

let signUpRender = (req,res)=>{
    res.render ('signup.ejs');
}

let createUser = async (req,res)=>{
    try {
        let {username,email,password} = req.body;
        const newUser = new User ({email, username});
        let addedUser = await User.register(newUser,password);
        req.login (addedUser, (err)=>{
            if (err) {
                return next(err);
            }
            req.flash ('success','Welcome to StayVia !');
            res.redirect ('/listings');
        });
    }
    catch (er) {
        req.flash ('error',er.message);
        res.redirect ('/signup');
    }
}

let loginRender = (req,res)=>{
    res.render ('signin.ejs');
}

let loginUser  = (req,res)=>{
    req.flash('success','Welcome Back !');
    if (res.locals.path) {
        if (res.locals.prepath=='/review') {
            res.redirect(res.locals.baseUrl);
        }
        else {
            res.redirect(res.locals.path);
        }
    }
    else {
        res.redirect('/listings');
    }
}

let logoutUser = (req,res,next)=>{
    req.logout((err)=> {
        if (err)
            {
                return next(err);
            }
    req.flash('success',"You are logged out !");
    res.redirect('/listings');
    });
}

module.exports = {signUpRender,createUser,loginRender,loginUser,logoutUser}