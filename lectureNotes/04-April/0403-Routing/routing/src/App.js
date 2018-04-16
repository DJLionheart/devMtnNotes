import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import routes from './routes'
import Colors from './Components/Colors';
import Results from './Components/Results';


// import FirstRoute from './Components/FirstRoute';
// import SecondRoute from './Components/SecondRoute';
// import ThirdRoute from './Components/ThirdRoute'

import './App.css';

class App extends Component {
  render() {
    return (
      //HashRouter is just a pre-built component, listening for the URL.
      // Route can be self-closing
      <HashRouter>
        { routes }
      </HashRouter>
    );
  }
}

export default App;
