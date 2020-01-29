import React, { Component } from "react";
import axios from "axios";

export class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      quantity: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/create", this.state)
      .then(res => alert(res.data))
      .catch(err => alert(err.data));

    this.setState({
      item: "",
      quantity: ""
    });
  };

  render() {
    return (
      <div>
        <h2>Add item</h2>
        <form
          onSubmit={this.handleSubmit}
          className="form-group border  p-4 text-left"
        >
          <label htmlFor="item">Item Name</label>
          <input
            type="text"
            name="item"
            className="form-control"
            maxLength="20"
            onChange={this.handleChange}
            value={this.state.item}
          />

          <label htmlFor="quantity">quantity</label>
          <input
            type="text"
            name="quantity"
            maxLength="10"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.quantity}
          />
          <button type="submit" className="btn btn-primary p-2 mt-2 btn-block">
            Add item
          </button>
        </form>
      </div>
    );
  }
}

export default Add;
