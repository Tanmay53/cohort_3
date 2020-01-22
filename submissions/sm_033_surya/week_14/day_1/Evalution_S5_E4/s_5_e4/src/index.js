import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from "redux"
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { addReducer, userLogin } from "./Components/Common/Reducer"

const reducer = combineReducers({
    addReducer,
    userLogin
})
const store = createStore(reducer)
const render = () => ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
render()
store.subscribe(render)
