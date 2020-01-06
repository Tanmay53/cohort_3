import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Components/Common/Dashboard";
import Auth from "../Components/Auth/Auth";
import AddVehicle from "../Components/Common/AddVehicle";
import ViewVehicle from "../Components/Common/ViewVehicles";
import Error from "../Components/Common/Error";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/auth" component={Auth} />
        <Route exact path="/dashboard/add" component={AddVehicle} />
        <Route exact path="/dashboard/view" component={ViewVehicle} />
        <Route component={Error} />
      </Switch>
    );
  }
}

export default Routes;
