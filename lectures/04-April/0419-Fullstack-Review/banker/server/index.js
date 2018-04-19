require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive');

const app = express();
const {
    YE_OLDE_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING
} = process.env;

// Database instance => db
massive(CONNECTION_STRING).then( db => {
    app.set('db', db);
})

app.use(express.static(__dirname + './../build'))
// serving up static files like this will not work until after you create a production build

// 1. Set up the Express Session middleware (this sets up the session store in memory,
// but it will be taken over by passport)
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

// 2. Set up passport and direct it to the session store.
app.use(passport.initialize());
app.use(passport.session())

// 3. Set up Auth 0 Strategy (and the second argument, the function). Again, no one expects me to 
// just KNOW how to do this... Passport has docs that will tell me how to do this.
// People who build the libraries walk us through how to do this.
passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID, 
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    // Which endpoint do we want to send users back to after the authorization? url goes here.
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done){
    
    const db = app.get('db');
    const { id, displayName, picture } = profile;
   
    
    db.find_user([id]).then( users => {
        // You can name this param whatever you want, but make it clean
        if(users[0]) {

            // If that find_user.sql runs and finds a user (at position 0), it will return
            // an object, so i can return done and pass in the user info.
            return done(null, users[0].id)

            // after calling done, passport.serializeUser will be called
        } else {
            // Now we handle when someone is logging in for the first time. User at pos. 0 will be falsy
            db.create_user([displayName, picture, id])
                .then( createdUser => {
                    return done(null, createdUser[0].id) // remember sql will return an array...
                } )
                // Either we're taking an existing user id OR a newly created id and passing it on.
                // One or the other, not both.
        }
    })

    // Massive's preferred way of passing in parameters is with [square brackets]
    // Massive takes all the sql files in my db folder and makes them callable functions
    // Massive docs say you should pass in all arguments (singular or plural) in an array

    // All massive calls will always return an array from the database 
    
    // db will always represent my database instance
 
    //Safest to use return wil these lines of code. Trying to call done twice will cause some probs
    // return done(null, profile); - We will call done in our callback code after connecting to db
}))

passport.serializeUser( (id, done) => {
    // This puts info in the session
    
    return done(null, id)
}) 

passport.deserializeUser( (id, done) => {
    app.get('db').find_session_user([id]).then( user => {
        return done(null, user[0])
    })
    // this takes the id and puts it on the req.user object/property.
    // By using passport.serialize/deserializeUser - 
})

app.get('/auth', passport.authenticate('auth0'))
// When you want to authenticate with this strategy, you HAVE to use 'auth0'
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:4025/#/private',
    failureRedirect: 'http://localhost:4025'
}))


app.get('/auth/me', function(req, res) {
    if (req.user) {
        //If this is truthy, someone is logged in.
        res.status(200).send(req.user);
    } else {
        res.status(401).send('Nice try sucka!')
        // If this is undefined, no one is logged in.
        // If serializeUser was never fired, deserializeUser will never.
        // Passport will create the user property on the req object for us/
    }
})

app.get('/logout', function(req, res) {
    req.logOut();
    // Built in method to end the session
    res.redirect('http://localhost:4025');
    // Page to redirect user to after they click logout.
})

app.listen(YE_OLDE_PORT, () => { console.log(`Ye olde server doth lend an ear at port ${YE_OLDE_PORT}, sire!`);
});