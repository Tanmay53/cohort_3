import React, { Component } from "react";
import { Link } from "react-router-dom";
var style = {
  textDecoration: "none",
  color: "white"
};

export class Dashboard extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center m-5 ">
        <button className="btn btn-dark m-5">
          <Link style={style} to="/AddCustomers">
            ADD NEW CUSTOMER
          </Link>
        </button>
        <button className="btn btn-dark m-5">
          <Link style={style} to="/ViewCustomers">
            VIEW ALL CUSTOMERS
          </Link>
        </button>
      </div>
    );
  }
}

export default Dashboard;
