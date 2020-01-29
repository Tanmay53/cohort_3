import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
