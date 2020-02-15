import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

function Routes() {
  return (
    <div className="text-center">
      <ul class="nav">
        <li class="nav-item">
          <Link className="text-dark">Auth</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/login">
            <button className="btn btn-info">Login </button>
          </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/signup">
            <button className="btn btn-success">Sign UP </button>
          </Link>
        </li>
      </ul>
      <div className="col-md-5 row"></div>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/login" component={() => <Login />} />
        <Route exact path="/signup" component={() => <Register />} />
      </Switch>
    </div>
  );
}

export default Routes;
