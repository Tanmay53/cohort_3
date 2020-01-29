import axios from "axios";
import { Link } from "react-router-dom";

import React, { Component } from "react";

export class Done extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const fetchData = async () => {
      let response = await axios.get("http://localhost:5000/purchased");
      this.setState({
        data: response.data
      });
    };
    fetchData();
  }
  render() {
    return (
      <div>
        <h1 className="display-5">Purchased Items</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Purchased</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(ele => (
              <tr>
                <td>{ele.item}</td>
                <td>{ele.quantity}</td>
                <td>{ele.purchased}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/">
          <button className="btn btn-primary">Home Page</button>
        </Link>
      </div>
    );
  }
}

export default Done;
