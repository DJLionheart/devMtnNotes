require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0');

const app = express();


const {
    YE_OLDE_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL
} = process.env;


app.use(session({
    //configuration object
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
    // Session is created, with no info in the session store. Still save to store
}))
//Keep track of user information inside their session.


// JUST FOCUS on the Data Flow. I'm not expected to memorize authentication.
// Set it up once at the beginning, and then don't touch it again. 


////// NEW CODE - PASSPORT CODE //////////
/////////////////////////////////////////

// AFTER session middleware, use the passport
app.use(passport.initialize());
app.use(passport.session());
// This line takes their passport and puts it on their session.
// After this, passport takes care of the rest.

passport.use( new Auth0Strategy({
    // This is setting up my app to use Auth0
    // These properties are VERY specific:
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL, //callbackURL: redirect the users back to site
    scope: 'openid profile' //when request is made to google, we just want profile info back.
}, function(accessToken, refreshToken, extraParams, profile, done){
        done(null, profile); //1st param is error catching info, but all we care about is the profile information. Pass it on to next
}) )
// Auth0Strategy: two parameters: config object and function. profile parameter is where we get user info.

passport.serializeUser( (profile, done) => {
    done(null, profile); // Will store Profile information in Session Store
})

passport.deserializeUser( (profile, done) => {
    done(null, profile); // Will grab profile info from session store and puts it on Req object: req.user
})

app.get('/auth', passport.authenticate('auth0')) //This kicks off the whole process. Param: specify the strategy we just defined.

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000' //redirects user from this endpoint to the Front End app.
}))
//THIS ENDPOINT is the allowed callback url. BUT this time, someone is logged in.

////// END OF NEW CODE //////////
////////////////////////////////

// You can set up different strategies for all the different services if you want... BUT Auth0 lets you connect user authentication from all these services.


app.listen(YE_OLDE_PORT, () => { console.log(`Ye olde server doth lend an ear at port ${YE_OLDE_PORT}, sire!`);
})