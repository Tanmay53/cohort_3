import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import queryString from "query-string";
import "../App.css";

export default class Purchased extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "",
      quantity: ""
    };
  }

  componentDidMount = () => {
    let values = queryString.parse(this.props.location.search);
    this.setState({
      item: values.item,
      quantity: values.quantity
    });
  };

  confirmOrder = () => {
    let id = this.props.match.params.id;
    axios
      .post(`http://localhost:5000/purchased/${Number(id) + 1}`)
      .then(res => {
        swal({
          title: "Item Purchased!",
          text: res.data,
          icon: "success"
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "70vh" }}
      >
        <div className="card shadow card_item">
          <div className="card-body">
            <h5 className="card-title text-center">Item: {this.state.item}</h5>
            <h6 className="card-subtitle mb-2 text-muted text-center">
              Quantity: {this.state.quantity}
            </h6>
            <p className="card-text">
              If you want to buy, please confirm this order.
            </p>
            <Link onClick={this.confirmOrder} to="" className="card-link">
              Confirm Order
            </Link>
            <Link to="/" className="card-link float-right">
              Go back
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
