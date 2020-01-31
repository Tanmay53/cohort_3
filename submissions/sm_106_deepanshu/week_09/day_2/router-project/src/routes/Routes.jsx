import { Route, Link } from "react-router-dom";
import React, { Component } from "react";
import Hamburger from "../components/common/Hamburger";
import "../App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Login from "./Login";

export class Routes extends Component {
  render() {
    const Footer = () => {
      return (
        <div className="container">
          <div className="row ">
            <div className="col-md-12 d-flex justify-content-center ">
              <ul className="inline d-flex align-items-center">
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    OUR STORY
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    SHOP
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    BLOG
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    CONTACT
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    POLICIES
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    SEARCH
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-around p-3">
            <div className="icons-social">
              <Link style={{ textDecoration: "none" }} to="/">
                <i class="fab fa-instagram"></i>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/">
                <i class="fab fa-facebook-f"></i>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/">
                <i class="fab fa-twitter"></i>
              </Link>
            </div>
            <div className="">
              <p>Copyright © 2020, So Worth Loving</p>
            </div>
          </div>
        </div>
      );
    };
    return (
      <>
        <div className="container fixed">
          <div className="row justify-content-around">
            <div className="">
              <Hamburger />
            </div>
            <div className="">
              <img
                src="https://cdn.shopify.com/s/files/1/0112/3682/files/SoWorthLoving-70Logo-DiamondOnly-Blk-Transparent_x50.png?v=1556076203"
                className="img-fluid m-2"
                width="50px"
                alt=""
              />
            </div>
            <div className="">
              <img
                src="https://img.icons8.com/ios/1000/000000/shopping-mall.png"
                width="40px"
                className="m-2"
                alt=""
              />
            </div>
          </div>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

        <Footer />
      </>
    );
  }
}

export default Routes;
