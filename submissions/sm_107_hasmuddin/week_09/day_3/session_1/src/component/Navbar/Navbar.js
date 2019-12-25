import React from "react";
import { Link } from "react-router-dom";

var style = {
  color: "white",
  textDecoration: "none"
};

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <a className="navbar-brand" href="#">
        <Link to="/" style={style}>
          <h2>Shopingo</h2>
        </Link>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Anything...."
            aria-label="Search"
          />
        </form>
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Link to="/about" style={style}>
                About
              </Link>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Product
            </a>
            <div
              className="dropdown-menu bg-dark"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item text-dark">
                <Link
                  style={{ textDecoration: "none", color: "orange" }}
                  to="/product"
                >
                  Limited
                </Link>
              </a>
              <a className="dropdown-item">
                <Link
                  style={{ textDecoration: "none", color: "orange" }}
                  to="/product/category"
                >
                  Category
                </Link>
              </a>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">
              <Link style={style} to="/contact">
                Contact
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">
              <Link style={style} to="/faq">
                Faq
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link rounded bg-dark d-block"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              <Link style={style} to="/signup">
                Singup/Login
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link col-6 "
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              <Link style={style} to="/cart" className="row mx-1">
                <h5 className> Cart</h5>
                <div className="col-lg-6 col-md-2 col-3">
                  <img
                    src="https://img.icons8.com/pastel-glyph/2x/shopping-cart--v2.png"
                    alt=""
                    className="img-fluid "
                  />
                </div>
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
