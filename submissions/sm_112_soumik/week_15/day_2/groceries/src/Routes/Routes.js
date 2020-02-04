import { Route, Link, Switch } from "react-router-dom";

import React from "react";
import Home from "../Components/Home";
import Add from "../Components/Add";
import Added from "../Components/Added";
import Delete from "../Components/Delete";
import Edit from "../Components/Edit";
import Purchase from "../Components/Purchase";

function Routes() {
  return (
    <div>
      <nav className="nav bg-dark">
        <Link to="/" className="text-light nav-link">
          Home
        </Link>
        <Link to="/add" className="text-light nav-link">
          Add Items
        </Link>
        <Link to="/done" className="text-light nav-link">
          Added To List
        </Link>
      </nav>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/add" component={() => <Add />} />
        <Route exact path="/done" component={() => <Added />} />
        <Route path="/edit/:item" component={props => <Edit {...props} />} />
        <Route
          path="/purchase/:item"
          component={props => <Purchase {...props} />}
        />
        <Route
          path="/delete/:item"
          component={props => <Delete {...props} />}
        />
      </Switch>
    </div>
  );
}

export default Routes;
