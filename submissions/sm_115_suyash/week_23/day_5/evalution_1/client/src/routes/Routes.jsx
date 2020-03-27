import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Login from "../component/auth/Login";
import SignUp from "../component/auth/SignUp";
import AddNewTweet from "../component/common/AddNewTweet";
import Home from "../component/common/Home";
import UserProfile from "../component/common/UserProfile";
import AllUsers from "../component/common/AllUsers";

class Routes extends Component {
  render() {
    return (
      <>
        <ul
          className="d-sm-block py-3 text-center d-md-flex align-item-center justify-content-around shadow-sm"
          style={{ listStyle: "none" }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Tweet</Link>
          </li>
          <li>
            <Link to="/alluser">All User</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/add" component={AddNewTweet} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/alluser" component={AllUsers} />
      </>
    );
  }
}

export default Routes;
