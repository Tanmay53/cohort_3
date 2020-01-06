import React from "react";
import { Redirect } from "react-router-dom";

function Cart(props) {
  if (!props.isAuth) {
    return <Redirect to="/signIn" />;
  } else {
    return <h2>Show Product</h2>;
  }
}

export default Cart;
