/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer
        className="container-fluid text-light"
        style={{ background: "black" }}
      >
        <div className="container">
          <div className="row justify-content-center m-1 p-2">
            <a
              rel="noreferrer noopener"
              href="https://www.facebook.com/apple/"
              target="_blank"
              className="p-2 nav-link"
            >
              <img alt="fb icon" src="facebook.png" height="25px"></img>
            </a>
            <a
              rel="noreferrer noopener"
              href="https://www.facebook.com/apple/"
              target="_blank"
              className="p-2"
            >
              <img alt="twitter icon" src="twitter.png" height="25px"></img>
            </a>
            <a
              rel="noreferrer noopener"
              href="https://www.youtube.com/user/Apple"
              target="_blank"
              className="p-2"
            >
              <img alt="youtube icon" src="youtube.png" height="25px"></img>
            </a>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/apple?lang=en"
              target="_blank"
              className="p-2"
            >
              <img alt="insta icon" src="instagram.png" height="25px"></img>
            </a>
          </div>
          <div className="row justify-content-center m-1 p-2">
            <span>
              <Link className="nav-link text-light" to="/career">
                Career
              </Link>
            </span>
            <span>
              <Link className="nav-link text-light" to="/faq">
                FAQ
              </Link>
            </span>
            <span>
              <Link className="nav-link text-light" to="/aboutUs">
                About us
              </Link>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
