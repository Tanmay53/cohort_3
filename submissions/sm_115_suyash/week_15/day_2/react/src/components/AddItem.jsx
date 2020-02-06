import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";
import "../App.css";
import { Link } from "react-router-dom";

export default class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "",
      quantity: "",
      purchased: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitFrom = e => {
    e.preventDefault();
    if (this.state.item != "" && this.state.quantity) {
      axios.post("http://localhost:5000/create", {
        item: this.state.item,
        quantity: this.state.quantity,
        purchased: this.state.purchased
      });
      swal({
        title: "Item Added!",
        text: "Item added successfully",
        icon: "success"
      });
      this.setState({
        item: "",
        quantity: ""
      });
    } else {
      alert("Fill all inputs...");
    }
  };

  render() {
    return (
      <>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "70vh" }}
        >
          <div className="text-center pt-5 px-5 pb-5 add-item">
            <form>
              <label className="h1 font-weight-normal">Add New Item</label>
              <div className="py-2">
                <input
                  className="px-2 py-1 add-item-input"
                  type="text"
                  onChange={this.handleChange}
                  name="item"
                  value={this.state.item}
                  placeholder="Enter Your Item"
                />
              </div>
              <div className="py-2">
                <input
                  className="px-2 py-1 add-item-input"
                  type="number"
                  onChange={this.handleChange}
                  name="quantity"
                  value={this.state.quantity}
                  placeholder="Enter Your Quantity"
                />
              </div>
              <button
                className="text-white my-btn w-50 py-2 mt-3"
                onClick={this.submitFrom}
              >
                Add Item
              </button>
            </form>
          </div>
        </div>
        <Link
          to="/"
          className="text-white my-btn text-center py-2 px-3 ml-3 mt-3"
        >
          Go Back
        </Link>
      </>
    );
  }
}
