//The DOM - Document Object Browser

//DOM - What is being displayed in your browser.
//The Node tree/structure....

//DOM Manipulation - Changing what displays in the browser.
//'Destroying' the DOM and recreating it.

//Virtual DOM - A middle man between your application and the actual DOM.
//VDOM will compare with the DOM to see what's different, and will only change what needs to be updated.
//Faster because you're not updating the Actual DOM with everything every time.
//You're only destroying what needs to be changed.


//You don't see the VDOM, that's stored under the hood.

//React takes your code and converts it all to JavaScript so your browser can handle it.


//Components can be re-used. This keeps your code DRY (Don't Repeat Yourself). Makes it easier to fix what's wrong.
//You don't have to fix the whole engine if it's just an alternator that died.

//Component-Based-Architecture is like a tree

//package.json
//Gives instructions on what your application needs. When you run npm install,
//it will install all the dependencies you need.


//package-lock.json
//Keeps track of your dependencies, the libraries it's using, 
//Makes sure everything meshes together as it should.


//index.html - add meta data. Pretty much the only things you'll change (besides page Title)


//JSX is only found in React.


//You can only return one element within the Component. That's why we wrap 
//the code to be returned within a div.

//Give and Take. We don't steal :) Because we export default, or "give", we can "take".


//RULE - ONE D
//If you export default, you do not have to destructure.
//If you just export, you must destructure.
//One D or the other...



//STATE - Holds the private data specific to that component.
//What 'State' is the Data in?
//State holds the data specific to the component
//We must first initialize state, it must be created before we can
//Change  it/edit it/whatever....  

//Invoking super() will invoke the constructor method inside the parent class
//Invokes the constructor in the React Component class.

//Putting props inside of super is not required unless you are specifically using props when initializing state.


//MAP REVIEW =====>
//.map iterates over the original array and will return a new array.

let arr = [1, 2, 3, 4, 5]

let newArr = arr.map(function(element, index, array){
    return element + 2
})

newArr;

// index.js:2178 Warning: Each child in an array or iterator should have a unique "key" prop.

// Check the render method of `App`. See https://fb.me/react-warning-keys for more information.
//     in div (at App.js:28)
//     in App (at index.js:7)

//KEY PROP
//On the outermost element of the thing we are returning, we need to add a key prop.
//It makes rendering multiple things more efficient, because it easily distinguishes the items from themselves.
//You're returning a bunch of boxes that have JSX in them. The JSX is different, but the boxes are the same
//UNLESS you label the brown box with a key, a unique ID.

//When you're JUST rendering a list, i is fine. When you need to manipulate the info more, the key needs to be 
//more unique.


//The app needs to save the data we're inputting.
//We need a way to have the application save that info and add it to the list... 

//EVENT LISTENER
//A click of a button, or a change, or a mouse-over, or a scroll.
//Evenet Listener's only job is to wait for the event...

<input
    type="text"
    placeholder="Add new item..."
    onChange={() => console.log('I\'m typin!')}
    />


//onClick

//These let us trigger events. Include arrow function?

//If I wanted my list to be blank, I would make it an empty array.
//If it's going to be a string, it needs to start as such.
//If it's going to be an array, it needs to start as such.

//Keep track of the ending curly brace.
//If you create a method within the constructor, it will not work as expected.


//Every time an event listener fires a function, it's going to pass in an argument of the event object.

//We can access the value of the input.

//If I want to access the argument passed in a function, I need to declare a parameter.


//Usually, use e for event object.

//You cannot just write this.state.inputValue = e.target.value...
//You must use this.setState() - the ONLY way you can change state.



//MEMORIZE target.value....

//Event listener creates an event object. It's just info about the event that happened. We really only care
//About the target value (target.value) target of the event is the input, and the value is what we passed in.


//We can give 



//There are TWO types of components we can build:
//Class Components
//Functional Components


//If you are using State, your component needs to be a Class component.

//If you are NOT, you can use a "stateless" Functional Component.

//BOTH types of functions will use Props.


//Afternoon Project and/or React-Drills
//ONLY DO SET 1



//Afternoon Project ----> Typo

//App.js
//render () { --include the return keyword in that file}


//


//BEFORE JUMPING INTO THE Q
//1. Talk to partner
//2. Opened console tools and look through errors
//3. Googled problem at least once