/** @format */

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../common/dashboard";
import Login from "../auth/login";
import AddUser from "../common/Users/addUser";
import NotFound from "../common/notFound";
import { ProtectedRoute } from "../auth/protectedRoute";
import ViewAllUsers from "../common/Users/viewAllUsers";
import UpdateUser from "../common/Users/updateUserData";
import ViewUser from "../common/Users/viewUser";

export default function Routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/addUser" component={AddUser} />
        <ProtectedRoute
          path="/viewAllUsers"
          exact
          component={props => <ViewAllUsers {...props} />}
        />
        <ProtectedRoute
          path="/viewAllUsers/:id"
          exact
          component={props => <ViewUser {...props} />}
        />
        <ProtectedRoute
          path="/viewAllUsers/:id/update"
          exact
          component={props => <UpdateUser {...props} />}
        />
        <ProtectedRoute component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
