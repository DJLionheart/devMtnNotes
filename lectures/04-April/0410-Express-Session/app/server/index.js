
require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      mw = require('./middleware');

const app = express(),
      port = 3005;

//TOP LEVEL MIDDLEWARE (anything above will not be affected by this middleware)
app.use(bodyParser.json());

//Session is a function, so we will invoke it!
//the object we pass session as an argument is a config object
app.use(session({
      resave: false,
      saveUninitialized: true,
      secret: process.env.SESSION_SECRET

}))

//Custom middleware, which will look similar to endpoints
app.use((req, res, next) => {
      //next allows us to continue to the next step of our function chain.
      console.log('Attack in Dragonsreach!')
      next()
})

//Authentication... We have sensitive info that we don't want people to be able to access unless they're authenticated.
//If they are authenticated, we can call next. If not, we can send a response (403 - forbidden)

app.get('/api/skyrim', (req, res) => {
      res.status(200).send({data: 'Whiterun'})
})

app.post('/api/skyrimSecrets', mw.authenticate, (req, res) => {
      res.status(200).send({secret: 'The Skyforge houses a dreadful secret... The origin of Werewolves!'})
})


app.listen(port, () => console.log(`Ye olde server doth lend an ear at port ${port}`));