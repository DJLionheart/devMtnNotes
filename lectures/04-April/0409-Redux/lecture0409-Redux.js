/*

Lecture - 9 April 2018

REDUX


Good practice: if you can help it, you shouldn't pass props down further than two levels.


Redux helps manage state.

It's a State Container for JS applications

Global Application State Manager.


Redux: 
A separate piece of your application ----> Store
We will manage state in the Store.
Think of it as an object with key/value pairs.

We can directly modify the information in the store, and ANY component can hook up to it.

Instead of having to pass props all the way up the component tree and then back down, 
We can notify the store and tell it something has been updated, then the store will notify the necessary components.

Redux is helpful when doing routing.

        __________
        ( App.js )
//////////////////////
//  Router         //
////////////////////
|       |
|       |
C1      C2

Subscribing:
Links a component up to the store

REDUX: Great for larger applications.

There's a large boiler plate for Redux, so it may not be worth the time for smaller application.


Remember: React and Redux are separate libraries, not connected by default.


State: 
Stuff that my application is remembering.

Component State:
Information that component is remembering.

Redux Store (State) :
An object that stores the stuff your app will be remembering.

Whenever we want to update the Store, we must dispatch an action.

Action:
Just an object that describes how we want the store updated.

We will dispatch the action on, say, an onClick event.


Reducer:
The gate-keeper for the Store.
Just a function with a Switch Statement... 
What value (type) are we checking?
In the case that the type is ____, execute this code: ......

Current State goes into the reducer as well.

How we want to update the store often depends on the current value of state.

When the Store is updated, it will automatically send a notification to any of your react components that are 
connected/subscribed to the store, and they will update and display the correct information.



Note: You CANNOT have a Store without a Reducer. Start by creating the reducer, then you can create the Store after.


Ducks Module Pattern:
We should throw a reducer and any info related to what it's doing into the same file.

For this MiniProject: 
The Counter Reducer, Counter Action Creators, and Counter Types should all go in the same file.


Assignment Operator:
=
*/

function add(num = 1) {
        return num + 5
}

//Default parameter: If the function is called without putting in a parameter, num will equal 1.

/*
1. Create the reducer
2. Create the store.
3. Use the provider.

Bring in Provider from react-redux.

Anytime we will have react and redux mingling, we will need the react-redux library in some way.

Provider:
Wrap the <App /> component in Provider on index.js. Now Provider is the root-level component.

Any components you want to have access to the Store need to be nested under the Provider.


When using Router:

Provider
|
App.js
|
HashRouter

Provider is the component that's listening to any child components trying to update OR subscribe to the Store.



*/

function test() {
        return function() {
                alert('whaaaaaaat')
        }
}

/*

Whenever you want to connect a component, use:

export default connect(whatToGetFromStore)(App);



Actions:

Store the string inside a constant variable to avoid mis-spelling. React won't throw an error if it sees a string,
So we use CONST variables to help keep things constant.

Conventions: CONST: all caps, no spaces (use underscores)


Reducer takes State as it currently is and a function.

Object.assign - merges from left to right.
The last one merged in will override if the same property name is present.



Treat objects and arrays as if they're immutable.
This is how redux knows whether or not to re-render something.

If the State brought in to the reducer is different, it will re-render. otherwise it will stay the same.

ANYTIME you need to add additional functionality, start at the reducer and add the function there.

With ES6, if the key and value are the same, you can get rid of the colon. 




Part List App:



*/
