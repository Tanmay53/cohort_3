import React from "react";
import { Link } from "react-router-dom";

var style = {
  color: "white",
  textDecoration: "none"
};

export default function Navbar() {
  return (
    <nav className="nav navbar bg-info border-bottom shadow-sm text-white">
      <div className="nav-item rounded-circle col-lg-1 col-3">
        {/* nav logo */}
        <Link to="/" style={style}>
          <h2>Shopingo</h2>
        </Link>
      </div>
      <div className="col-lg-3 col-6 row">
        <input
          type="text"
          className="form-control"
          placeholder="Search Anything..."
        />
      </div>
      {/* nav items */}
      <div className="nav-item d-flex col-lg-5 justify-content-end align-items-end">
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
          <Link style={style} to="/contact">
            Contact
          </Link>
        </div>
        <div className="mx-3 mb-2">
          <Link style={style} to="/faq">
            FAQ
          </Link>
        </div>
        <div className=" btn btn-info mt-2 bg-dark">
          <Link style={style} to="/signup">
            Signup/Login
          </Link>
        </div>
        <div className=" btn btn-info mt-2 d-flex">
          <div className="col-5">
            <Link style={style} to="/cart">
              Cart
            </Link>
          </div>
          <div className="col-6">
            <img
              src="https://img.icons8.com/pastel-glyph/2x/shopping-cart--v2.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
