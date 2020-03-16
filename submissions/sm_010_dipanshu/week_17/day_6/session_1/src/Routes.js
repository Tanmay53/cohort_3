import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Signup from "./Components/Auth/Signup";
import Home from "./Components/Common/Home";
import Error from "./Components/Common/Error";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Auth} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route component={Error} />
      </Switch>
    );
  }
}

export default Routes;
