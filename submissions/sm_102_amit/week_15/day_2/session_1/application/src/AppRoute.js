import React from "react";
import { Switch, Route } from "react-router-dom";
import List from "./component/List";
import Add from "./component/Add";
import Edit from "./component/Edit";
import Delete from "./component/Delete";
import Purchase from "./component/Purchase";
import Purchased from "./component/Purchased";
import NotFound from "./component/NotFound";

const AppRoutes = ({ items, update }) => {
  return (
    <Switch>
      <Route
        path="/"
        exact={true}
        component={props => <List {...props} items={items} />}
      />
      <Route
        path="/home"
        component={props => <List {...props} items={items} />}
      />
      <Route
        path="/add"
        component={props => <Add {...props} update={update} />}
      />
      <Route
        path="/change/:id"
        component={props => <Edit {...props} items={items} update={update} />}
      />
      <Route
        path="/mark/:id"
        component={props => (
          <Purchase {...props} items={items} update={update} />
        )}
      />
      <Route
        path="/delete/:id"
        component={props => <Delete {...props} items={items} update={update} />}
      />
      <Route
        path="/done"
        component={props => <Purchased {...props} items={items} />}
      />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
