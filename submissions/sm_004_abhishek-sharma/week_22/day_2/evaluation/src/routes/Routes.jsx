import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
import Login from "./Login";
import Register from "./Register";
import NoMatch from "./NoMatch";

const Routes = (props) => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={props => <Login {...props} />} />
        <Route path="/dash" render={() => <DashboardRoutes />} />
        <Route path="/register" render={props => <Register {...props} />} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
};

export default Routes;