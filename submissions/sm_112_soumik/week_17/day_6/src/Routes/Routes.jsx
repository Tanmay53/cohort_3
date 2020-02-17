import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

function Routes() {
  return (
    <div className="text-center">
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/login" component={() => <Login />} />
        <Route exact path="/signup" component={() => <Register />} />
      </Switch>
    </div>
  );
}

export default Routes;
