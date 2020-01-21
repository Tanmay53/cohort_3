import React, { Component } from "react";

class ShopNow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartList: []
    };
  }

  updateCartList;

  render() {
    console.log("props-----------", this.props);
    if (this.props.cartList !== undefined) {
      this.state.cartList = this.props.cartList;
    } else {
      this.state.cartList = [];
    }
    console.log("ShopNow>>>>>>>", this.props);
    return (
      <div>
        <p>Item is added</p>
        {this.state.cartList.map(val => (
          <h3>Rs {val}</h3>
        ))}
      </div>
    );
  }
}

export default ShopNow;
