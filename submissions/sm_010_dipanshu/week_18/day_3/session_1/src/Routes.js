import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Signup from "./Components/Auth/Signup";
import Details from "./Components/Common/Details";
import Error from "./Components/Common/Error";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Auth} />
        <Route path="/signup" component={Signup} />
        <Route path="/details" component={Details} />
        <Route component={Error} />
      </Switch>
    );
  }
}

export default Routes;
