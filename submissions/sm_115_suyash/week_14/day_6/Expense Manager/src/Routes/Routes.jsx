import React from "react";
import { Link, Route } from "react-router-dom";
import Home from "./Home";
import AddData from "./AddData";
import Login from "./Login";
import SignUp from "./SignUp";

function Routes() {
  return (
    <>
      <div className="container-fluid bg-dark sticky-top shadow-sm">
        <div className="row text-center">
          <div className="col-md-2">
            <li className="py-3 mx-2">
              <Link className="px-3  text-white" to="/">
                Home
              </Link>
            </li>
          </div>
          <div className="col-md-5"></div>
          <div className="col-md-2">
            <li className="py-3 mx-2">
              <Link className="px-3 text-white" to="/add">
                Add Data
              </Link>
            </li>
          </div>
          <div className="col-md-3">
            <li className="py-3 mx-2">
              <Link className="px-3 text-white mx-0 px-0" to="/login">
                Login &nbsp; /
              </Link>
              <Link className="text-white mx-0 px-0" to="/signUp">
                Sign Up
              </Link>
            </li>
          </div>
        </div>
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/add" component={AddData} />
      <Route path="/login" component={Login} />
      <Route path="/signUp" component={SignUp} />
    </>
  );
}

export default Routes;
