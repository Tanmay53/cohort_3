import React from "react";
import { Route } from "react-router-dom";

const ProtectedRouter = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);
export default ProtectedRouter;
