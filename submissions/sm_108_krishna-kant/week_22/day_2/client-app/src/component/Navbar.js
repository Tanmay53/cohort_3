import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const { isAuth, logout } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Twitter
        </Link>
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
          <ul className="navbar-nav">
            <li className="nav-item active">
              {isAuth ? (
                <Link className="nav-link" to="/tweets">
                  My Tweets
                </Link>
              ) : (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
            </li>
            <li className="nav-item">
              {isAuth ? (
                <Link className="nav-link" to="/update-pic">
                  Update Profile
                </Link>
              ) : (
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              )}
            </li>
            {isAuth ? (
              <li className="nav-item">
                <Link className="nav-link" to="/create-tweet">
                  Create Tweet
                </Link>
              </li>
            ) : null}
            {isAuth ? (
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  Friends
                </Link>
              </li>
            ) : null}
            {isAuth ? (
              <li className="nav-item">
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    localStorage.removeItem("token");
                    logout();
                  }}
                >
                  LOGOUT
                </button>
              </li>
            ) : null}
          </ul>
        </div>
      </nav>
    );
  }
}
