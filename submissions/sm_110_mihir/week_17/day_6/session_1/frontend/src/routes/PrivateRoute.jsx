import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Login from "../components/auth/Login";

function PrivateRoute({ children, isAuthenticated, ...rest }) {
  return (
    <div>
      <Route
        {...rest}
        path="/"
        exact
        render={({ location }) =>
          isAuthenticated ? children : <Redirect to="/auth/login" />
        }
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isLoggedin
  };
};

export default connect(mapStateToProps)(PrivateRoute);
