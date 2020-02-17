import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../components/common/Home";
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";
import React from "react";
import { connect } from "react-redux";

function Routes({ isAuthenticated }) {
  console.log(isAuthenticated);
  return (
    <div>
      <Switch>
        <Route
          path="/"
          exact
          render={props =>
            isAuthenticated ? (
              <Home {...props} />
            ) : (
              <Redirect to="/auth/login" />
            )
          }
        />
        <Route path="/auth/signup" component={Signup} />
        <Route path="/auth/login" component={Login} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isLoggedin
  };
};

export default connect(mapStateToProps)(Routes);
