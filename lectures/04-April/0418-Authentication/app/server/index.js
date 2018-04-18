require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0');

const app = express();


const {
    YE_OLDE_PORT
} = process.env;




app.listen(YE_OLDE_PORT, () => { console.log(`Ye olde server doth lend an ear at port ${YE_OLDE_PORT}, sire!`);
})