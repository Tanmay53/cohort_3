import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import "./Navbar.css";
import Home from "../Home/Home";
import Surface from "../Surface/Surface";
import SignUp from "../LoginPage/SignUp";
import Xbox from "../Xbox/Xbox";
import Support from "../Support/Support";
import Office from "../Office/Office";
import Window from "../Window/Window";
import AllSolution from "../AllSolution/AllSolution";
import ShopNow from "../ShopNow/ShopNow";

class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="px-5 row">
          <div className="col-6">
            <Link className="mr-3 py-2 d-inline-block" to="/" className="">
              <img
                src="cslogo2.png"
                alt=""
                className="mr-0 pr-0 mr-4"
                width="110px"
                height="50px"
              />
            </Link>
            <Link
              className="mr-4 sm-font text-dark py-3 d-inline-block"
              to="/office"
            >
              Office
            </Link>
            <Link
              className="mr-4 sm-font text-dark py-3 d-inline-block"
              to="/window"
            >
              Window
            </Link>
            <Link
              className="mr-4 sm-font text-dark py-3 d-inline-block"
              to="/surface"
            >
              Surface
            </Link>
            <Link
              className="mr-4 sm-font text-dark py-3 d-inline-block"
              to="/xbox"
            >
              Xbox
            </Link>
            <Link
              className="mr-4 sm-font text-dark py-3 d-inline-block"
              to="/support"
            >
              Support
            </Link>
          </div>
          <div className="col-2"></div>
          <div className="col-4">
            <Link
              className="py-3 ml-5 mr-4 sm-font text-dark py-3 d-inline-block "
              to="/allsolution"
            >
              <span>All Solution </span>
              <i className="mt-1 d-inline-block fas fa-chevron-down"></i>
            </Link>
            <Link to="">
              <i className="py-3 mr-4 fas fa-search text-dark "></i>
            </Link>
            <Link to="/shopnow">
              <i className="py-3 mr-4 fas fa-shopping-cart text-dark"></i>
            </Link>
            <Link to="/signup">
              <span className="text-dark sm-font mr-1">Login</span>
              <i className="fas fa-sign-in-alt text-dark"></i>
            </Link>
          </div>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/office" component={Office} />
            <Route path="/window" component={Window} />
            <Route path="/surface" component={Surface} />
            <Route path="/xbox" component={Xbox} />
            <Route path="/support" component={Support} />
            <Route path="/allsolution" component={AllSolution} />
            <Route path="/shopnow" component={ShopNow} />
            <Route path="/signup" component={SignUp} />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
