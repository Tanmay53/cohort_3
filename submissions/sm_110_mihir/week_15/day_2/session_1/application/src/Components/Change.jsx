import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export class Change extends Component {
  constructor(props) {
    let query = new URLSearchParams(props.location.search);
    let q1 = query.get("item");
    let q2 = query.get("quantity");
    super(props);
    this.state = {
      item: "" || q1,
      quantity: "" || q2
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let id = this.props.match.params.id;
    axios
      .post("http://localhost:5000/edit/" + id, this.state)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.data));

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
            Update item
          </button>
        </form>
        <Link to="/">
          <button type="submit" className="btn btn-primary p-2 mt-2 btn-block">
            Home page
          </button>
        </Link>
      </div>
    );
  }
}

export default Change;
