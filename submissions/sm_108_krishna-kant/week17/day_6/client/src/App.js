import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./component/login/Login";
import Navbar from "./component/navbar/Navbar";
import Signup from "./component/signup/Signup";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
      </Switch>
    </div>
  );
}

export default App;
