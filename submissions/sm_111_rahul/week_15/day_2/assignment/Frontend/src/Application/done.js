/** @format */

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export class Done extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_list: [],
      status: false
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/purchased")
      .then(res => {
        const data = res.data.items;
        console.log(data);
        this.setState({
          item_list: data,
          status: true
        });
      })
      .catch(err => console.log(err));
    console.log(this.state.item_list);
  }
  render() {
    var item_name = [];
    if (this.state.status == true) {
      for (let key in this.state.item_list) {
        item_name.push([
          this.state.item_list[key]["item_name"],
          this.state.item_list[key]["quantity"]
        ]);
      }
    }

    return (
      <div className="container-fluid bg-dark " style={{ height: "100vh" }}>
        <div className="display-3 text-center bg-dark text-warning p-2">
          Grocery Store
        </div>
        <br></br>
        <h1 className="display-3 text-center text-warning">Purchased Items</h1>
        <div className="table-responsive">
          <table className="bg-warning text-dark table container p-2 h3">
            <thead>
              <tr>
                <th>#</th>
                <th>Item Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {item_name.map((ele, id = 1) => {
                return (
                  <tr>
                    <td>{++id}</td>
                    <td>{ele[0]}</td>
                    <td>{ele[1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Done;
