/** @format */

import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import AddProducts from "./addProducts";
import Cart from "./cart";
import NotFound from "./notFound";
import Orders from "./orders";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/addProducts" component={AddProducts} />
        <Route path="/cart" component={Cart} />
        <Route path="/orders" component={Orders} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
