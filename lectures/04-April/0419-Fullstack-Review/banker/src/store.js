import { createStore, applyMiddleware } from 'redux';
import reducer from './ducks/users';
import promiseMiddleware from 'redux-promise-middleware';

// 1. import promiseMiddleware as above.
// 2. Then destructure the applyMiddleware method from redux.
// 3. create a middleware variable and set it to promiseMiddleware() invoked
// 4. pass applyMiddleware into the createStore() method, with the middleware variable passed in.

let middleware = promiseMiddleware();

export default createStore(reducer, applyMiddleware(middleware));