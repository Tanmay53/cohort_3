/** @format */
import React, { Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="m-3">
        <div className="row justify-content-center">
          <div className="col-sm-11 col-md-7 col-lg-5">
            <div className="form-group">
              <label htmlFor="userAdd">Enter Address</label>
              <input
                type="text"
                className="form-control"
                name="userAdd"
                id="userAdd"
                placeholder="Address"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Enter Mobile Number</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Mobile"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="paymentDetails">Select Payment Method</label>
              <select
                className="form-control"
                name="paymentDetails"
                id="paymentDetails"
              >
                <option></option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
