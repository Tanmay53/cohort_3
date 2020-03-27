import React from 'react';
import Routes from "./routes/Routes"
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import store from "./redux/store"
import './App.css';

console.log(store.getState())
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
   </Provider>
  );
}

export default App;
