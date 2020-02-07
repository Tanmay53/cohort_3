import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import "../App.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  axiosCall = () => {
    axios
      .get("http://localhost:5000/listing")
      .then(res => {
        this.setState(
          {
            data: res.data
          },
          () => {
            // console.log(this.state.data);
          }
        );
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    this.axiosCall();
  };

  deleteUser = i => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this item!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        axios
          .post(`http://localhost:5000/delete/${i + 1}`)
          .then(res => console.log(res))
          .catch(err => console.log("ERROR->", err));
        this.axiosCall();
        swal("Poof! Your item has been deleted!", {
          icon: "success"
        });
      } else {
        swal("Your item is safe!");
      }
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-center pt-4 pb-3 h1-size px-2 ">
          <i className="shadow py-1 px-3 mt-2">
            Welcome To my Shop, Buy Grocery Items
          </i>
        </h1>
        <table className="table table-dark text-center">
          <thead className="">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Select Item</th>
              <th scope="col">Edit Item</th>
              <th scope="col">Delete Item</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item, i) => {
              return (
                <tr key={item.item}>
                  <th scope="row">{i + 1}</th>
                  <td style={{ color: "#f7c08a" }}>{item.item}</td>
                  <td style={{ color: "#f7c08a" }}>{item.quantity}</td>
                  <td>
                    <Link
                      className="text-dark"
                      to={`/purchasedItem/${i}/?item=${item.item}&quantity=${item.quantity}`}
                    >
                      <span style={{ color: "#f7c08a" }}>Buy</span>{" "}
                      <i
                        style={{ color: "#f7c08a" }}
                        className="ml-2 fas fa-shopping-basket"
                      ></i>
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="text-dark"
                      to={`/editItem/${i}/?item=${item.item}&quantity=${item.quantity}`}
                    >
                      <i
                        style={{ color: "#f7c08a" }}
                        className="fas fa-user-edit"
                      ></i>
                    </Link>
                  </td>
                  <td>
                    <Link
                      to=""
                      className="text-dark"
                      onClick={() => this.deleteUser(i)}
                    >
                      <i
                        style={{ color: "#f7c08a" }}
                        className="fas fa-user-times"
                      ></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
