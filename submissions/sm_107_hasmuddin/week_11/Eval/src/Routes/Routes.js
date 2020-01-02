import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import notFound from "../Components/common/notFound";
import Login from "../Components/auth/Login";
import Dashboard from "../Components/auth/Dashboard";
import Navbar from "../Components/common/Navbar";
import AddCustomers from "../Components/common/AddCustomers";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            component={() =>
              this.state.isLoggedIn ? <Dashboard /> : <Login />
            }
          />
          <Route path="/AddCustomers" component={AddCustomers} />
          <Route component={notFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
