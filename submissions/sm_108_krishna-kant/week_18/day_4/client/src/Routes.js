import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import Update from "./components/Update/Update";
export default function Routes({ update }) {
  let isAuth = localStorage.getItem("isAuth");
  return (
    <div>
      {isAuth ? <Route path="/" exact component={Dashboard}></Route> : null}
      <Route
        path="/login"
        render={props => <Login {...props} update={update}></Login>}
      ></Route>
      <Route path="/signup" component={Signup}></Route>
      <Route
        path="/update"
        render={props => <Update {...props} update={update}></Update>}
      ></Route>
    </div>
  );
}
