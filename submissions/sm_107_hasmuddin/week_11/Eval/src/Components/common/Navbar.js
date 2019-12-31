import React from "react";
import { Link } from "react-router-dom";
var style = {
  textDecoration: "none",
  color: "black",
  padding: "8px 15px",
  background: "white"
};
export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-dark justify-content-between">
      <a className="navbar-brand">
        {" "}
        <h2 className="text-white">
          <Link style={{ color: "white", textDecoration: "none" }} to="/" exact>
            Employee.com
          </Link>
        </h2>
      </a>
      <button className="btn btn-dark ">
        <Link style={style} to="/AddCustomers">
          ADD NEW CUSTOMER
        </Link>
      </button>
      <button className="btn btn-dark ">
        <Link style={style} to="/ViewCustomers">
          VIEW ALL CUSTOMERS
        </Link>
      </button>
    </nav>
  );
}
