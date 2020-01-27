import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
          <ul className="navbar-nav">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJvFXZqdgM2NVRLRcc5l9jV6g1kbtsfBT6EzbwKc1T-mPGx17dDw&s"  alt="img" style={{width:"50px", height:"50px"}}/>
            <li className="nav-item">
              <Link to="/home" exact className="navbar-brand ml-5 mr-5">
                HOME
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="navbar-brand ml-5 mr-5">
                ABOUT
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/cloth" className="navbar-brand ml-5 mr-5">
                CLOTHS
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/elec" className="navbar-brand ml-5 mr-5">
                ELECTRONICS
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="navbar-brand ml-5 mr-5">
                CONTACT
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/help" className="navbar-brand ml-5 mr-5">
                HELP
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
