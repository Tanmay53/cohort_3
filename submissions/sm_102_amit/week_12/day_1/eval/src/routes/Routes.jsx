import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { Auth } from "../components/auth/Auth";
import Login from "../components/auth/Login";
import Dashboard from "../components/common/Dashboard";
import VehicleList from "../components/common/VehicleList";
import AddVehicle from "../components/common/AddVehicle";
import EditVehicle from "../components/common/EditVehicle";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        Auth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <PrivateRoute path="/dashboard">
      <Dashboard />
    </PrivateRoute>
    <Route path="/vehicle-list" component={VehicleList} />
    <Route path="/add-vehicle" component={AddVehicle} />
    <Route path="/edit-vehicle/:id" component={EditVehicle} />
  </Switch>
);

export default Routes;
