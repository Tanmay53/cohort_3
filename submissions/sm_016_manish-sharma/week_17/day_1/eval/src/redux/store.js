import {createStore, applyMiddleware, compose} from 'redux'
import {reducers} from './reducers'
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)) );
// const store = createStore(reducers,applyMiddleware(thunk),)
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
console.log(store.getState())

export default store