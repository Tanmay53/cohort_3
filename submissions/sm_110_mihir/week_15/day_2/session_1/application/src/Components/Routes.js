import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Add from "./Add";
import Change from "./Change";
import Delete from "./Delete";
export default function Routes(props) {
  return (
    <div>
      <Switch>
        <Route path="/" exact render={props => <Home {...props} />} />
        <Route path="/home" render={props => <Home {...props} />} />
        <Route path="/add" component={Add} />
        <Route path="/change/:id" component={Change} />
        <Route path="/delete/:id" component={Delete} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
