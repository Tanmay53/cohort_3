/** @format */

import React, { Component } from "react";
import axios from "axios";
import { Alert } from "reactstrap";
export class Delete extends Component {
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
        this.setState({
          item: res.data.items[this.props.match.params.id - 1]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleClick = e => {
    e.preventDefault();
    console.log(this.props.match.params.id);
    axios
      .post(`http://localhost:5000/delete/${this.props.match.params.id - 1}`)
      .then(res => {
        alert("Deleted Successfully");
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
            <h1>Quantity :{this.state.item.quantity}</h1>
            <br></br>
            <div>
              <Alert color="danger bg-light">
                Are you sure to delete it?
                <button className="btn btn-dark mx-4">No</button>
                <button
                  className="btn btn-dark mx-4"
                  onClick={e => this.handleClick(e)}
                >
                  Yes
                </button>
              </Alert>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Delete;
