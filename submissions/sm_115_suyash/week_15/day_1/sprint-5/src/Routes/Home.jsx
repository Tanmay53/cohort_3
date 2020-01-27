import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1 className="display-2 text-info mt-5 pt-3">Dashbaord Page</h1>
        <div className="row mt-5 pt-5">
          <div className="col-md-6">
            <Link className="bg-dark py-3 px-3 btn text-white" to="/addvehicle">
              ADD A NEW TOPIC
            </Link>
          </div>
          <div className="col-md-6">
            <Link className="bg-dark py-3 px-3 btn text-white" to="/view">
              VIEW TOPICS
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
