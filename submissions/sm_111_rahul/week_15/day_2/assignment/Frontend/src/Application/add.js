/** @format */

import React, { Component } from "react";
import axios from "axios";

export class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_name: "",
      quantity: 0
    };
  }
  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  submit = e => {
    e.preventDefault();
    let item = this.state.item_name;
    let quantity = this.state.quantity;
    console.log(item, quantity);
    if (item != "" && quantity != 0) {
      axios
        .post("http://127.0.0.1:5000/create", {
          item_name: item,
          quantity: quantity
        })
        .then(res => {
          alert("Item added successfully");
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div className="container-fluid bg-dark" style={{ height: "100vh" }}>
        <div className="row justify-content-center">
          <div className="col-sm-8 col-md-6 col-lg-4 bg-warning p-5 m-4">
            <div className="form-group">
              <label htmlFor="item_name" className="h3">
                Enter Item Name:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Item Name"
                name="item_name"
                id="item_name"
                onChange={e => this.handleChange(e.target.name, e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="quantity" className="h3">
                Choose Quantity
              </label>
              <select
                className="form-control"
                name="quantity"
                id="quantity"
                onChange={e => {
                  this.handleChange(e.target.name, e.target.value);
                }}
              >
                <option>Select Quantity</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
            <button
              className="btn btn-dark"
              type="button"
              onClick={e => this.submit(e)}
            >
              Add Item
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Add;
