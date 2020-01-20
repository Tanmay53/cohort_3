import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import AllUsers from "../Common/AllUsers";
import AddUser from "../Common/AddUser";
import Login from "./Login";
import Dashboard from "./Dashboard";

class Routes extends Component {
  logoutHandler = () => {
    localStorage.setItem("isAuthenticated", false);

    this.setState({
      isAuthenticated: "false"
    });
  };

  render() {
    return (
      <React.Fragment>
        {localStorage.getItem("isAuthenticated") === "true" ? (
          <React.Fragment>
            {console.log("hi")}
            <button onClick={this.logoutHandler}>LOGOUT</button>
            <Route
              path="/"
              render={() => <Redirect push to="/dashboard" />}
              exact
            />
            <Route
              path="/login"
              render={() => <Redirect push to="/dashboard" />}
            />
            <Route path="/adduser" component={AddUser} />
            <Route path="/allusers" component={AllUsers} />
            <Route path="/dashboard" component={Dashboard} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            {console.log("bye")}
            <Redirect to="/login" />
            <Route path="/login" render={props => <Login {...props} />} />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Routes;
