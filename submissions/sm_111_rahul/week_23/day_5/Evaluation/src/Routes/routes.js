/** @format */

import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Components/login";
import Register from "../Components/register";
import ProtectedRoutes from "./protectedRoutes";
import NoMatch from "../Components/noMatch";
import Navbar from "../Components/navbar";

const Routes = () => {
  
  return (
    <div>
      <Route path="/" component={Navbar} />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <div
              style={{ backgroundImage: "URL(/music.jpeg)", height: "90vh" }}
              className="text-center text-danger display-4"
            >
              Click On Album List
            </div>
          )}
        />
        <Route path="/home" render={() => <ProtectedRoutes />} />
        <Route path="/register" render={() => <Register />} />
        <Route path="/login" render={() => <Login />} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};
export default Routes;
