//LECTURE - 26 March 2018 - React II

//Unidirectional Data Flow --------> From Parent to Child

//State - when data originates in the component.
//Props - when data originates somewhere else and is passed to the component.

//Parent component will contain state, and have the data, and will pass to child component via props.

//ONE SOURCE TO RULE THEM ALL (truth) - If you have specific data, it should only exist in one location.
//If multiple components need it, it will have to be passed down via props/


//Look to lecture-0323-React/ReactDemo for today's work.

let props = {
    num: 0
}

//Add props within the tag on the parent.
//Basically creating a key value pair. 
//<ChildWithProps
//num={this.state.number} />

//Props is just an object, we are adding a key to that object (num), and the value will be this.state.number
//on child component: 
//<h1>{this.props.num}</h1>
//


//All the child is doing

//The component tag is the ONLY place we will be passing props)
//Anything you can save to a variable, you can pass through props.
//You can pass WHATEVER you want, and whatever you pass, you can access on the props object in the child component.

//ONLY use 'this' in class components.
//Do not use 'this' in functional components.

//First, pass the function a parameter, which we call props. Now that we have props as a parameter, we can access the props object.


//Props in a class component ----
//You have to use 'this.props'
//You have to make sure that you import { Component } from 'react'


//The key/value pairs we send via props are specific to that Component. You put it on the Component tag in the parent.


//props//
//The parent / boss gets to decide what the data is.
//The child / employee component cannot change that data, it just does what it is told.


//When you call setState, the render method will be called again.

//Lifecyle
//Each component has one.

//When the parent component re-renders, the child will as well.


//Passing a function through props for a button component:
//the function needs to be un-invoked.

//It's more efficient to bind than to use arrow functions.

//If you pass a function through props, you HAVE to bind!

//Binding makes it so that when you invoke the function, no matter where it's invoked (in a different component), 'this' will
//reference the right Component!

//JSX is more to render and display visual components...


//GOOD RULE OF THUMB... If you write a method, bind it!


//Inline styling in JSX: font-family would be fontFamily.


//RECAP ------------->
//two ways to acccess data:
//state - read/write
//props - read only

//parent Component -> child Component - unidirectional

//rule of thumb for methods ===> bind!
//it must be bound in the class component it was created in.