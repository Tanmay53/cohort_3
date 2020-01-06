import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="container-fluid shadow-sm sticky">
      <div className="row">
        <div className="col-1 ml-4">
          <a href="#">
            <img src="./slackLogo.png" alt="" width="120px" />
          </a>
        </div>
        <div className="col-1 font-md ml-4 pt-3 ml-5">
          <a href="#" className="text-dark">
            Why Slack?
          </a>
        </div>
        <div className="col-1 font-md ml-4 pt-3">
          <a href="#" className="text-dark">
            Solution
          </a>
        </div>
        <div className="col-1 font-md ml-4 pt-3">
          <a href="#" className="text-dark">
            Resources
          </a>
        </div>
        <div className="col-1 font-md ml-4 pt-3">
          <a href="#" className="text-dark">
            Enterprise
          </a>
        </div>
        <div className="col-1 font-md ml-4 pt-3">
          <a href="#" className="text-dark">
            Pricing
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-1 pt-3">
          <a href="#" className="bg-white text-dark">
            Sign in
          </a>
        </div>
        <div className="col-2 pt-1">
          <a href="#" className="bg-primary btn font-weight-bold text-white ">
            GET STARTED
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
