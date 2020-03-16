import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../components/common/Home";
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";
import React from "react";
import PrivateRoute from "./PrivateRoute";
// import { connect } from "react-redux";

export default function Routes() {
  return (
    <div>
      <Switch>
        {/* <Route
          path="/"
          exact
          render={props =>
            isAuthenticated ? (
              <Home {...props} />
            ) : (
              <Redirect to="/auth/login" />
            )
          }
        /> */}

        <Route path="/auth/signup" component={Signup} />
        <Route path="/auth/login" component={Login} />
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     isAuthenticated: state.isLoggedin
//   };
// };

// export default connect(mapStateToProps)(Routes);
