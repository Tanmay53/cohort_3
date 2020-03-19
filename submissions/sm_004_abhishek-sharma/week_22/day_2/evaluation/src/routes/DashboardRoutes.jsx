import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "./Dashboard/Dashboard";
import AddEmp from "./Dashboard/AddEmp";
import NavBar from "./Dashboard/Navbar";

const DashboardRoutes = props => {
  const { isAuth } = props;
  return isAuth ? (
    <>
      <Route path="/dash" render={() => <NavBar />} />
      <Switch>
        <Route path="/dash" exact render={() => <Dashboard />} />
        <Route path="/dash/add" render={() => <AddEmp />} />
      </Switch>
    </>
  ) : (
    <Redirect to="/" />
  );
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isLoggedIn
});
export default connect(mapStateToProps, null)(DashboardRoutes);