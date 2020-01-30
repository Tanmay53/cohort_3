/** @format */

import React, { Component } from "react";
import axios from "axios";
export class Mark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/listing")
      .then(res => {
        console.log(res.data.items[this.props.match.params.id - 1]);
        this.setState(
          {
            item: res.data.items[this.props.match.params.id - 1]
          },
          () => {
            console.log(this.state.item.purchased);
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleClick = e => {
    e.preventDefault();
    console.log(this.props.match.params.id);
    axios
      .post(
        `http://localhost:5000/purchased/${this.props.match.params.id}`,
        {
          isPurchase: true
        }
      )
      .then(res => {
        alert("Marked as purchased");
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container-fluid bg-dark" style={{ height: "100vh" }}>
        <div className="row justify-content-center">
          <div className="col-sm-8 col-md-6 col-lg-4 bg-warning p-5 m-4">
            <h1>Item Name :{this.state.item.item_name}</h1>
            <h1 className="mb-3">Quantity :{this.state.item.quantity}</h1>
            <br></br>
            <button
              className="btn btn-dark mx-4"
              onClick={e => this.handleClick(e)}
            >
              Mark As Purchased
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Mark;
