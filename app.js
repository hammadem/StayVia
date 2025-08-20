if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require ('path');
const methodOverride = require('method-override');
const ejsMate = require ('ejs-mate');
const ExpressError = require ("./utils/ExpressError");
const session = require ('express-session');
const MongoStore = require('connect-mongo');
const flash = require ('connect-flash');
const User = require('./models/User');
const passport = require ('passport');
const LocalStrategy = require ('passport-local');
const passportLocalMongoose = require ('passport-local-mongoose');

const listings = require ('./routers/listings.js');
const reviews = require ('./routers/reviews.js');
const users = require ('./routers/user.js');

main()
    .then (
        ()=>{
            console.log("connected to DB");
        }
    )
    .catch ((err)=>{
        console.log (err);
    });

async function main () {
    await mongoose.connect(`${process.env.ATLAS_DB}`);
}

let store = MongoStore.create({
    mongoUrl: `${process.env.ATLAS_DB}`,
    touchAfter: 24 * 3600,
});

const sessionOptions = {
    store,
    secret: `${process.env.SECRET}`,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now()+7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly: true,
    }
};

app.set ('view engine','ejs');
app.set ('views',path.join(__dirname,'views'));
app.use (express.urlencoded({extended: true}));
app.use (methodOverride('_method'));
app.engine ('ejs',ejsMate);
app.use (express.static(path.join(__dirname,'/public')));

app.use (session(sessionOptions));
app.use (flash());

app.use (passport.initialize());
app.use (passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use ((req,res,next)=>{
    res.locals.success = req.flash ('success');
    if (res.locals.success.length) {
        console.log (res.locals.success[0]);
    }
    res.locals.error = req.flash ('error');
    if (res.locals.error.length) {
        console.log (res.locals.error[0]);
    }
    res.locals.currUser = req.user;
    res.locals.reqPath = req.originalUrl;
    next ();
});

app.use ('/listings',listings);
app.use ('/listings/:id/', reviews);
app.use ('/', users);

// app.get ('/demouser', async (req,res)=>{
//     const newUser = new User ({
//         email: "h7181e4e@gmail.com",
//         username: "h617155",
//     });
//     let added = await User.register(newUser,"hellow-world");
//     res.send (added);
// });

app.use ('/',(req,res)=>{
    res.redirect ('/listings');
});

app.use ((req,res,next)=>{
    next (new ExpressError (404,"page not found"));
});

app.use ((err,req,res,next)=>{
    let {status=500,message="something went wrong"} = err;
    res.status(status).render('error.ejs',{err});
});

app.use ('\\*',(err,req,res,next)=>{
    let {status=500,message="something went wrong"} = err;
    res.status(status).render('error.ejs',{err});
});

let port = 8080;
app.listen (port, ()=>{
    console.log(`Connected at ${port}`);
});