import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import bookingReducer from "./Reducers/Reducer"

const reducer = combineReducers({
    bookingReducer
})
const store = createStore(reducer)

const render = () => ReactDOM.render(<Provider store={store} ><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
render();
store.subscribe(render)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
