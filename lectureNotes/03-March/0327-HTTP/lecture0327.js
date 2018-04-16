// LECTURE NOTES 27 March 2018


//Client - sends a request for data.
//Server - computer that waits for a data request.

//How does a client make a request to the server?

//REQUEST RESPONSE Lifecycle

//URL: Uniform Resource Locator

//https://devmountain.com/about.html

//Starts with Protocol, then Domain, then the specific resource you're asking for.

//?s=tech a search for tech

//Header - additional information sent with a request.
//Body - data being sent with the request or response. This can be empyty depending on the request/response.


//JSON - keys and values all have quotes around them, unless the value is a number.
//Property names are in quotes
//All quotes are double quotes.
//Values could be arrays/objects, or nested arrays/objects
//No trailing commas - after the last item in the list
//No quote marks around numbers, objects, and arrays.

//JSON is the preferred way of sending data across the web.

//Things are going to be parsed on either side.

//REST - Representational State Transfer
//An architecture or design concept for transfering data - how we communicate accross the web.

POST - CREATE
GET - READ
PUT - UPDATE 
DELETE - DELETE

//CRUD - app is capable of creating data, reading, updating it, or deleting it. 
CREATE 
READ 
UPDATE 
DELETE 

//Servers make all the rules... 
//Just because I send a GET request, it doesn't mean the computer is bound to send me anything.
//Handle Requests correctly.

// ? is a query string parameter. Like a question. Additional piece of information.

//Put requests typically include just what you want to update.

//Parameters and Queries
//These things will change, depending on your request.

POST
//http://www.devmounta.in/api/student, BODY: {data}

//By default, whatever you type as a URL will be a GET request.

//Unless we use promises, when we run the request to get data, we can't do anything while we wait.
//Promises let our programs still be able to function while we wait for data request.


//AXIOS - A Promised Based HTTP Client.
let axios = require('axios');

axios.get('http://pokeapi.co/api/v2/pokemon/25/')
//Give axios the url of where you want to request the data from.

let promise = axios.get('http://pokeapi.co/api/v2/pokemon/25/')

//A Promise is a JavaScript Object that can be:

//Resolved ----- the data came back successfully
//Rejected ----- request denied.
// or Pending ----- Still getting information.

promise.then( pokeDataResponse => {
    console.log(pokeDataResponse)
})
//THEN we can do something with the data...
//.then will be used with a callback function.

//The information you request will be sent back on a data property.
pokeDataResponse.data 

//Whatever you call the promise doesn't matter, you just need to use it with .then 

//axios returned a promise immediately... 

//The arrow function above: When you receive the data, run this function...
//The code attached to .then will only run once you receive the data.


res => {
    this.setState({
        pokeMonsters: res.data
    })
}

//You may need to set state in React with data that comes back from the server.

//Status Codes
//HTTP Cats --- will tell you what the status codes mean (or HTTP Dogs)

//ALL WE'RE DOING TODAY: Practicing HTTP requests via axios.

//Anytime you interact with a 3rd party server, there should be documents explaining how to use them.


//Anytime you use the this keyword in one of your class methods, you have to bind.


//id is important - it will never be duplicated


//REACT LIFECYCLE
//Lifecycle methods... 
//When a react component is created, the constructor fires off to set the initial state.
//Next method to get fired off is the render method.
//---ANYTIME you use the 'this' keyword within a class, you have to bind--- EXCEPT the built-in React lifecycle methods.
//You HAVE to bind components that YOU built.

componentDidMount()
//Built into React... 
//The second the component is built and rendered for the first time, it will fire off this function.
//There are things you'll want displayed the second the user gets there.

//Add a breakpoint in the sources > users > 


//Queries - like writing on the envelope address
//Parameters
//Body of Request

//If you're sending a letter, you want the sensitive info to be in the body.

//The URL is like the address on an envelope.


//Queries - start with the question mark ?
//https://joes-autos.herokuapp.com/api/vehicles?color=${color}

//Parameters are usually used with id's.
//Search terms are usually made with queries