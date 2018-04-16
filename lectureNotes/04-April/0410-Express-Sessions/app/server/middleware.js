module.exports = {
    
    authenticate: (req, res, next) => {
        let { password, username } = req.body;
        console.log(req.session);
        
        
        //if the value is true(if user has been authenticated), we call next, and they're good to go.
        if( req.session.authenticated ) {
            next();
        //Else if - they have NOT been authenticated, we ask for username and password.
        } else if ( password === process.env.PASSWORD && username === process.env.USERNAME) {
            //
            req.session.authenticated = true;
            req.session.nickName = 'KoolDude';
            req.session.cart = [];
            next();
            //If the user is authenticated, we send them on to the next()
        } else {
            //Otherwise, we send them a status code 403 - forbidden
            res.sendStatus(403);
        }
    },

    something: (req, res, next) => {
        
    }
}