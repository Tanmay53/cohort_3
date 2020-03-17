import React from "react";
import { Link, Redirect, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Login from "../Components/Login";
import Register from "../Components/Register";

function Routes(props) {
  console.log(props.auth);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        {/* <Route exact path="/" component={() => <Home />} /> */}
        <Route exact path="/login" component={() => <Login />} />
        <Route exact path="/register" component={() => <Register />} />
      </Switch>
    </div>
  );
}
const mapStateToProps = state => ({
  auth: state.auth.status
});
export default connect(mapStateToProps, null)(Routes);
