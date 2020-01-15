import React from "react";

function ShopNow(props) {
  console.log("ShopNow>>>>>>>", props.cartList);
  return (
    <div>
      <p>Item is added</p>
      {props.cartList.map(val => (
        <h3>Rs {val}</h3>
      ))}
    </div>
  );
}

export default ShopNow;
