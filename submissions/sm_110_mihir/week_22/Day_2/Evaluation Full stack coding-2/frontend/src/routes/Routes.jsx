import { Switch, Route } from "react-router-dom";
import Home from "../components/common/Home";
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";
import React from "react";
import PrivateRoute from "./PrivateRoute";
import Insert from "../components/common/Insert";
import NotFound from "../components/common/NotFound";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" exact>
          <Home />
        </PrivateRoute>
        <PrivateRoute path="/insert">
          <Insert />
        </PrivateRoute>

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
