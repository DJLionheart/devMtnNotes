import React, { Component } from 'react';
import Item from './Item';

import './App.css';

class App extends Component {
//State holds the data specific to the component
//We must first initialize state, it must be created before we can
//Change  it/edit it/whatever....  
  constructor(){
    super()
    this.state = {
      //example of state: Amazon - shopping cart, who's logged in, do they have Prime?
      //anything the app needs to remember that will be changing.
      list: ['Learn react', 'Become a Pokemon Master', 'Beat Spelunky in Single-Player Mode'],
      inputValue: ''

    }

    this.saveToList = this.saveToList.bind(this);
    //binding needs to happen inside the constructor, but outside state
    //If you are passing a function through props, you must ALWAYS bind.
    this.saveInputValue = this.saveInputValue.bind(this);

  }

  saveInputValue(e) {
    this.setState({
      //setState is a method that takes an obj as an argument
      //That argument should have the state property you want to update.
      //The value should be the value you want to change it to.
      //How to reference that? e.target.value
      inputValue: e.target.value
      //this is the event target value, what you type in the input

    });
    
  }

  saveToList() {
    //We need to make a copy of the state list, making a new array, and pushing the input value to our new list.
    let newArr = this.state.list.slice(0);
    //Then, we need to push the saved input value from state to the new array.
    newArr.push(this.state.inputValue);
    this.setState({
      list: newArr,
      inputValue: ''
    })
  }

//Actual JavaScript must be in curly braces

  render() {

    //just returning e will just return each string. We will return JSX so we can format better.

    let newList = this.state.list.map((e, i) => {
      return (
        <div key={i + e}>
          <input type="checkbox"/>
          <p>{ e }</p>
        </div>
      )
    })

    //Instead of having to type out each item individually... .map will do all that work!!

//onChange= If something changes... Fire this item.
    return (
      <div className="App">
        <Item save={this.saveToList}/>
        <input
          type="text"
          placeholder='Add new item...'
          onChange={this.saveInputValue}
          value={this.state.inputValue}
          />
        { newList }
      </div>
    );
  }
}

export default App;
