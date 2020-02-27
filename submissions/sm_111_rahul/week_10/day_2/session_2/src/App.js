/** @format */

import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  console.log(store.getState())
  return (
    <Provider store = {store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
