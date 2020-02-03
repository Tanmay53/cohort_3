import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Hamburger.css";
import Search from "../common/Search";

export class Hamburger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false
    };
  }

  clickMe = () => {
    this.setState(previousState => {
      return {
        flag: !previousState.flag
      };
    });
  };

  render() {
    return (
      <>
        <div class="menu-wrap">
          <input
            type="checkbox"
            name=""
            class="toggler"
            onClick={this.clickMe}
            checked={this.state.flag}
            id=""
          />
          <div class="hamburger">
            <div class=""></div>
          </div>
          <div class="menu">
            <div class="">
              <div class="">
                <ul>
                  <li>
                    <Link onClick={this.clickMe} to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <li>Shop</li>
                    <Link onClick={this.clickMe} to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.clickMe} to="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.clickMe} to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.clickMe} to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>Log In</li>
                  <li>Create Account</li>
                </ul>

                <Search />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Hamburger;
