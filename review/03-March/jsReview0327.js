//REACT REVIEW - 27 March 2018

//Toy Problem

//React Notes

//If all the information tracking is happening somewhere else, you can make a Functional Component.


//Functional component: stand there and look pretty.
//Functional components are a bit faster at rendering than class Components.
//If your component isn't going to use state, consider making it a functional component.


//Lifecycle Methods - help you to run code at a certain time in the component's lifecycle.

//99% of the time, in a componentDidMount method you will want to run an axios request.

//Any time you do a .then, do a .catch()
//Because, if it doesn't work, the .catch() says what we wanted to happen didn't happen, therefor do this:

//.catch(console.log)