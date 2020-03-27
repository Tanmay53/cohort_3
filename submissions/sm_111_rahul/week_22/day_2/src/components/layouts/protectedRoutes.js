/** @format */

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../layouts/home";
import Edit from "../layouts/edit";

const ProtectedRoutes = props => {
  const { isAuth } = props;
  console.log(isAuth);
  return !isAuth ? (
    <div>
      <Route path="/home" render={() => <Home />} />
      <Route path="/home/edit" exact render={() => <Edit />} />
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

export default connect(mapStateToProps)(ProtectedRoutes);
