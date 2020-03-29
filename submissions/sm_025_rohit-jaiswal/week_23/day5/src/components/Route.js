import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Signin from "./Signin";
import Block from "./Block";

class Routes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact render={() => <Main />} />
          <Route path="/login" exact render={() => <Login />} />
          <Route path="/signin" exact render={() => <Signin />} />
          <Route path="/displayform" exact render={() => <Block />} />
        </Switch>
      </React.Fragment>
    );
  }
}
export default Routes;
