import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {createStore, combineReducers,applyMiddleware} from 'redux'
import loginreducer from './redux/Reducers'
import thunk from 'redux-thunk'
// import * as serviceWorker from './serviceWorker';

const reducers =combineReducers({
    loginreducer
})
const store = createStore(reducers,applyMiddleware(thunk))

const render =()=>ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));
render()
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
