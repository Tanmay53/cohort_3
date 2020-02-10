import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";
import queryString from "query-string";
import { Link } from "react-router-dom";

export default class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "",
      quantity: 0
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount = () => {
    let values = queryString.parse(this.props.location.search);
    console.log(values);
    this.setState({
      item: values.item,
      quantity: values.quantity
    });
  };

  submitFrom = e => {
    e.preventDefault();
    let id = this.props.match.params.id;
    console.log(id);
    if (this.state.item != "" && Number(this.state.quantity) != 0) {
      axios
        .post(`http://localhost:5000/edit/${Number(id) + 1}`, {
          item: this.state.item,
          quantity: this.state.quantity,
          purchased: false
        })
        .then(res => console.log("Edit -----> ", res))
        .catch(err => console.log("Edit error----> ", err));
      swal({
        title: "Item Edited!",
        text: "Edit item successfully",
        icon: "success"
      });
      this.setState({
        item: "",
        quantity: ""
      });
    } else {
      alert("Fill inputs. properly...");
    }
  };

  render() {
    return (
      <>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "70vh" }}
        >
          <div className="text-center pt-5 px-5 pb-5 add-item ">
            <form>
              <label className="h1 font-weight-normal">Edit Item</label>
              <div className="py-2">
                <input
                  className="px-2 py-1 add-item-input"
                  type="text"
                  onChange={this.handleChange}
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
                SUBMIT
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
