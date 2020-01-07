import React from "react";
import ProductJoiner from "./ProductJoiner";
import { Route } from "react-router-dom";

export default function Product() {
  return (
    <div>
      <Route path="/product" exact component={ProductJoiner} />
    </div>
  );
}