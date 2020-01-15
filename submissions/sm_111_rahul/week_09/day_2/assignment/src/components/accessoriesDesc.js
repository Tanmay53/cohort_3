/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";

const Product = props => {
  console.log(props);
  const productObj = props.data.accessories.find(
    element => element.id == props.match.params.id
  );
  if (productObj) {
    return (
      <div className="row justify-content-center">
        <div className="card ">
          <div className="card-body ">
            <img src={productObj.avatar} className="img-fluid"></img>
          </div>
          <div className="card-footer text-center text-primary h2">
            <p> Name : {productObj.name} </p>
            <p> Description :{productObj.description}</p>
            <p> Price : {productObj.price} </p>
            <Link to="/cart" className="btn btn-primary">
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <h1> Product not found, invalid id </h1>
      </React.Fragment>
    );
  }
};
class AccessoriesDesc extends Component {
  render() {
    return (
      <div className="container">
        <Product data={this.props.data} {...this.props} />
      </div>
    );
  }
}

export default AccessoriesDesc;
