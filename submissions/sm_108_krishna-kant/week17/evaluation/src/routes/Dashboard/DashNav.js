import React from "react";
import { Link } from "react-router-dom";

export default function DashNav({ token, logout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Airmeet
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <span className="mx-auto nav-link">
              Authenticated Token : {token}
            </span>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/dash">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/orders">
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <button className="btn btn-primary" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}