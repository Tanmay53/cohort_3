import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import { Route, Switch } from "react-router-dom";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route path="/users" component={Home}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
