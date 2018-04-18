//Lecture 28 March 2018

//Node

//Client Side:  (FRONT-END)
//JavaScript, React, etc...
//We used axios to communicate with the server

//Today we will be working on BACK-END...
//Server-side

//I will build a server for my application, so it will only be speaking, and doing the heavy lifting for my it.

//Node:
//When we installed express, npm installed all the other dependencies (a tree) that are needed to make express work.

//package-lock.json has all the names and versions of the dependencies OF the dependencies... (the dependency tree)

//package.json is important because it will let anyone using our code install all the needed dependencies
//simply by using npm install.


//Different versions are important...

//Deprecated - either the package doesn't work any more, or it's not the cool kid/not being used.
//We have to keep track of the dependencies, because if someone tries to install a newer/different version, it may break the code.

//To use a package on our server, you cannot use "import" syntax. You must use require:
const express = require('express');

const app = express();
//If it's a node module, we just use the file name. If it's a file you've created, you must use './name'

//save express to a variable, then save the result of express being invoked to the variable app

//The package Express is a framework for node JS
//Express is to node what react is to JavaScript. It just makes life a little easier.

//Listen method makes it so your server can keep running and listening.

//Nodemon makes it so you don't have to run node over and over.
//Run it in your project directory. It defaults to index.js (the main file)
//Some people like to use server.js - if you do this, update it in your package.json file
//If you put it in a server folder, you have to give it a file path.

//Typing rs will restart nodemon for you.

//      ====           ====
//    ======           ======== //   
// ========= Endpoints ============= //

// just functions.
// For every type of info you need to get from your server, you will have an endpoint. 

// app.METHOD(PATH, HANDLER FUNCTION)
// Method ---> get, put, post, delete
//            Make sure the method describes the purpose

// PATH ------>>> like the address ending.
//             common to preface with /api to help recognize that it's an endpoint path for your server.

// HANDLER FUNCTION ---->>> a function with three parameters:
//      request object, response object, next function
//When your server finds the correct endpoint, it will then invoke the handler function.
 
  ////////      \\\\\\\\
// Order of Operations: \\
// 1. HTTP request is made to your server.
// 2. Your server will then find the endpoints with the matching method
// 3. It will then find the endpoint with the matching path.
// 4. When the correct endpoint is found, it will invoke the handler function.
// 5. The handler function will do whatever you told it to do.

//When the correct endpoint is found, the three parameters are decided for you.
// Remember, even if you mix up the order of the parameters, the order will still be the same!
// ORDER IS IMPORTANT.
// You gotta receive a request BEFORE you can send a response...
//Common to use 'req' and 'res' instead of 'request' and 'response'

//Don't mix up the res from an axios/HTTP request with the response object from your server,
//specific to express node. THEY ARE VERY DIFFERENT

//Postman lets us make http requests without having to have a front-end.

//////////////////////////////////////////////
//How to Respond to the Client Requests....//
////////////////////////////////////////////

/////////2 Things to do when responding//////////////////]]]]]]]]]]
// 1. Set a status code 
//      200s - all is well 
//      300s - redirections 
//      400s - client errors 
//      500s - server errors 
//
// 2. Send data/response --this portion is optional--
//      .json will send in json format
//      .send will default to html
//
//////////// Best practice: send correct status codes.

// app.get('/path', (req, res, next) => {
//      res.status(200).send(--item--)
// })

//Post request: access info on the body

// 1. post
// 2. Body
// 3. Raw
// 4. Json 



////////////////////////////
/// Top-Level Middleware ///
///////////////////////////

// Top-level means it's at the top of your file.
// Middleware: a function that will fire before your endpoint.
//Top-level -----> everything below it will be affected by it.

//bodyParser lets you access the body of the reqest. It takes the json and parses it.

//Any endpoint below your middleware will be affected by that middleware.
//Any endpoint above will NOT be.

//If req.body is ever undefined, check to make sure that this bodyParser middleware is being correctly applied.


//We will use URL parameters ---->>> We have a portion of our url that can change.
// /api/camelot/:name

// all req.params is, is an object:

req.params = {
    name: "Galahad"
}

//We're creating our own key/value pair.
//Whatever we put after the colon is the key name.
//The value comes from the request URL.

//Have the key name describe what you want to send.


//Common pattern: use a controller.js file
//Move the handler functions to controller




//==================Instructor Notes====================\\

// cannot use import, must use require
const express = require('express');
// express is just a function
// the package express is a framework for node js
// it makes our life a little bit easier
const bodyParser  = require('body-parser');
// save the result of express being invoked to the variable app
const app = express(); 
// ================================ //
// ===== TOP LEVEL MIDDLEWARE ===== //
// ================================ //
// top level meaning it's at the top of your file
// middleware a function that will fire before your endpoint
// any endpoint below your middleware will be affected by that middleware. Any endpoint above, will not be
app.use(bodyParser.json());
// if req.body is ever undefined, check to make sure this bodyParser middleware is being correctly applied
// ===================== //
// ===== ENDPOINTS ===== //
// ===================== //
// ===== SYNTAX ===== //
// app.METHOD(PATH, HANDLER FUNCTION)
// METHOD --->>> get, put, post, delete. The http request method. make sure the method describes the purpose
// PATH --->>> is like the address ending, the path on the server. Common to preface with /api to help recognize that it's an endpoint path for your server
// HANDLER FUNCTION --->>> a function with three parameters: request object, response object, next function. When your server finds the correct endpoint, it will then invoke the handler function. 
// ===== ORDER OF OPERATIONS ===== //
// an http request is made to your server
// your server will then find the endpoints with the matching method 
// it will then find the endpoint with the matching path
// when the correct endpoint is found, it will invoke the handler function
// the handler function will do whatever you told it to do
// ===== REACT HTTP REQUEST EXAMPLE ===== //
// axios.get('http://cool.com/api/stuff').then((res) => {
// the res here is the result from your http request
// })
let stuff = []
app.get('/api/stuff', (req, res) => {
  // must receive a request before you can respond
  // the res here is the response object specific to express node
  
  // 2 things to do when responding
  // 1 - set a status code
  //   200s - all is well
  //   300s - redirections
  //   400s - client errors
  //   500s - server errors
  // 2 - send data, this portion is optional
  res.status(200).send("you were successful!")
})
app.post('/api/stuff', (req, res) => {
  stuff.push(req.body)
  res.status(200).send(stuff);
})
app.get('/api/stuff/:id', (req, res) => {
  // we have indicated in our path that this endpoint needs url params. Now there will be a property on the params object with the name of whatever we put after the colon
  // the value of this property will be whatever you put in the request url
  // IMPORTANT! the colon will ONLY be in the path of the endpoin, it will NOT be in the request url
  console.log(req.params) // req.params is just an object on the req object
})
// first argument is the port number
// second argument is a callback function
app.listen(3000, () => console.log('listening on port 3000'))
// ==== NODEMON ==== //
// it auto detects changes in files and restarts node for you
// make sure the main property in your package.json has the file name (and file path if applicable) to your main server file --- often index.js
// if you need to do a force restart, type rs and press enter
// to exit, ctrl + c