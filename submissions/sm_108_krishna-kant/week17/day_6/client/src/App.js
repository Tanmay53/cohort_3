import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./component/login/Login";
import Navbar from "./component/navbar/Navbar";
import Signup from "./component/signup/Signup";
import Profile from "./component/profile/Profile";

function App() {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn);
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        {isLoggedIn ? (
          <Route path="/profile" component={Profile}></Route>
        ) : (
          <Redirect to="/login"></Redirect>
        )}
      </Switch>
    </div>
  );
}

export default App;
