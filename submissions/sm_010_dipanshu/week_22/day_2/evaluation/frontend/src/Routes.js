import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Home from "./Components/Common/Home";
import Profile from "./Components/Common/Profile";
import Tweet from "./Components/Common/Tweet";
import UserTweets from "./Components/Common/UserTweets";
import Error from "./Components/Common/Error";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/home" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/tweet" component={Tweet} />
        <Route path="/my-tweets" component={UserTweets} />
        <Route component={Error} />
      </Switch>
    );
  }
}

export default Routes;
