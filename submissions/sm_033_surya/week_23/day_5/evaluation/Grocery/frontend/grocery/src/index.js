import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { Router } from "react-router-dom"
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { loginreducer } from './Redux/Reducer'
import thunk from 'redux-thunk'
import history from './history'

const reducer = combineReducers({
  loginreducer
})

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(

  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
