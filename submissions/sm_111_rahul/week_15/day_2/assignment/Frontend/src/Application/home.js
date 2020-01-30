/** @format */

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_list: [],
      status: false
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/listing")
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
        <div className="row justify-content-center p-3">
          <Link to="/add">
            <button type="button" className="btn btn-warning m-2">
              Add Item
            </button>
          </Link>
          <Link to="/done">
            <button type="button" className="btn btn-warning m-2">
              Purchased
            </button>
          </Link>
        </div>
        <div className="table-responsive">
          <table className="bg-warning text-dark table container p-2 h3 ">
            <thead>
              <tr>
                <th>#</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Edit</th>
                <th>Mark</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {item_name.map((ele, id = 1) => {
                return (
                  <tr>
                    <td>{++id}</td>
                    <td>{ele[0]}</td>
                    <td>{ele[1]}</td>
                    <td>
                      <Link to={`/change/${id}`}>Edit</Link>
                    </td>
                    <td>
                      <Link to={`/mark/${id}`}>Mark</Link>
                    </td>
                    <td>
                      <Link to={`/delete/${id}`} className="text-danger">
                        Delete
                      </Link>
                    </td>
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

export default Home;
