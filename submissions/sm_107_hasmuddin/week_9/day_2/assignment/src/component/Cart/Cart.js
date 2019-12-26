import React from "react";
import { Route } from "react-router-dom";
import CartItem from "./CartItem";
export default function Cart() {
  return (
    <div>
      <Route path="/cart" component={CartItem} />
    </div>
  );
}
