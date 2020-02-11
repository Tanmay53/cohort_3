import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../Components/Auth/Auth";
import Signup from "../Components/Auth/Signup";
import Home from "../Components/Common/Home";
import Orders from "../Components/Common/Orders";
import Error from "../Components/Common/Error";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Auth} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/orders" component={Orders} />
        <Route component={Error} />
      </Switch>
    );
  }
}
export default Routes;
