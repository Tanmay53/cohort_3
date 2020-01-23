import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { createStore,combineReducers} from "redux"
import { Provider } from "react-redux"
import addReducer from "./Common/Reducer"

const reducer = combineReducers({
    addReducer
})

const store = createStore(reducer)
const render = () => ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
render()
store.subscribe(render)
