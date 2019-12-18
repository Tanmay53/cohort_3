import React from "react";
import { Link } from "react-router-dom";
var style = {
  textDecoration: "none",
  color: "grey"
};
var white = {
  color: "white"
};

export default function Navbar() {
  return (
    <nav className="nav navbar border-bottom shadow-sm p-1">
      <div className="nav-item col-lg-2 col-md-2 col-3">
        {/* nav logo */}
        <Link to="/" style={style}>
          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt="logo"
            className="img-fluid"
          />
        </Link>
      </div>
      {/* nav items */}
      <div className="nav-item d-flex col-lg-8 justify-content-end align-items-end">
        <div className="mx-3 mb-2">
          <Link to="/about" style={style}>
            About
          </Link>
        </div>
        <div className="mx-3 mb-2">
          <Link style={style} to="/product">
            Product
          </Link>
        </div>
        <div className="mx-3 mb-2">
          <Link style={style} to="/pricing">
            Pricing
          </Link>
        </div>
        <div className="mx-3 mb-2">
          <Link style={style} to="/support">
            Support
          </Link>
        </div>
        <div className=" btn btn-info mt-2">
          <Link style={white} to="/signup">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}
