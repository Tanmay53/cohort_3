import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Update from "./Update";
import Delete from "./Delete";
import React from "react";
import NotFound from "./NotFound";

export default function Router(props) {
  return (
    <div>
      <Switch>
        <Route path="/" exact render={props => <Home {...props} />} />

        <Route path="/users" component={Home} />
        <Route path="/users/create" component={Create} />
        <Route
          path="/users/update/:id"
          render={props => <Update {...props} />}
        />
        <Route
          path="/users/delete/:id"
          render={props => <Delete {...props} />}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
