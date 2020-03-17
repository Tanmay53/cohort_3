import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Login from "../component/auth/Login";
import SignUp from "../component/auth/SignUp";
import Home from "../component/common/Home";
import AddData from "../component/common/AddData";
import Update from "../component/common/Update";

class Routes extends Component {
  render() {
    return (
      <>
        <ul
          className="d-sm-block py-3 text-center d-md-flex justify-content-around align-item-center shadow"
          style={{ listStyle: "none" }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Artist</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/add" component={AddData} />
        <Route path="/update/:id" component={Update} />
        <Route path="/signup" component={SignUp} />
      </>
    );
  }
}

export default Routes;
