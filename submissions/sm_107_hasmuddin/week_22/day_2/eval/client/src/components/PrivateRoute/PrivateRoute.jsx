import { Route, Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";


const PrivateRoute = ({ component: Component, Auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (Auth.message == "login Successfull") {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
const mapStateToProps = state => {
  return {
    Auth: state.Auth
  }
}

export default connect(mapStateToProps)(PrivateRoute)