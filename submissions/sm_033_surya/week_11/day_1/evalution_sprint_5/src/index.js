import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from "redux"
import App from './App';
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { loginReducer, addReducer } from "./Common/reducer"

const reducer = combineReducers({
    loginReducer,
    addReducer
})

const store = createStore(reducer)

const render = () => ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));
render()
store.subscribe(render)

// serviceWorker.unregister();
