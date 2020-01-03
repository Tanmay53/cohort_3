import React from "react";
import { Route } from "react-router";
import Login from "../Components/auth/Login";
import Dashboard from "../Components/common/Dashboard";
import AddCustomer from "../Components/common/AddCustomer";

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/add-customer" component={AddCustomer} />
  </React.Fragment>
);

export default Routes;
