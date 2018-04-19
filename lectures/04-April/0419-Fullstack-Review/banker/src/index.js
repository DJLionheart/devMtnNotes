import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {unregister} from './registerServiceWorker';
import store from './store'
import {Provider} from 'react-redux';

ReactDOM.render(
<Provider store={ store }>
    <App />
</Provider>, document.getElementById('root'));
unregister();

// The .render method takes the root component, and the location of where we want to 
// place it, and injects it into the HTML file.

// This file's main purpose is to mount my app directly into the html file.
// We shouldn't bloat it past that.
