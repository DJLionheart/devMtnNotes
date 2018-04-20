const express = require('express')
    , session = require('express-session')

const app = express();

app.use(session({
    secret: 'supah-secret',
    resave: false,
    saveUninitialized: true
}))

app.use(funcion(req, res, next){
    console.log('I am middleware')
    req.session.myName = {
        name: 'Joe'
    }
    next();
})

app.get('/test', function(req, res) {
    console.log('test')
})

app.listen(3001, () => { console.log('Listening at port 3001');
})