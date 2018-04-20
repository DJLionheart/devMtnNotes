import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={ ()=> axios.get('/test') }>Click me</button>
      </div>
    );
  }
}

export default App;
