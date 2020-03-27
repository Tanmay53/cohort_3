/** @format */

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./Authentication/authReducers";
import albumReducer from "./Reducers/reducers";
const rootReducer = combineReducers({ authReducer, albumReducer });

let composeEnhancer = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

let enhancer = composeEnhancer(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

export default store;
