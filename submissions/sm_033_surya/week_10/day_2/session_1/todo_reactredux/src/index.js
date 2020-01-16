import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import { todoReducer, countReducer } from "./Reducer";

const reducer = combineReducers({
    todoReducer,
    countReducer
})
const store = createStore(reducer)

const rootElement = document.getElementById("root")
const render = () => ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement)
render()
store.subscribe(render)