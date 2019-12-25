import React, { Component } from "react";

export class Bottom extends Component {
  render() {
    return (
      <div className="bg-dark p-5 row  d-flex">
        <div className="col-lg-4 col-md- col-12 text-center text-white ">
          <div className="d-flex justify-content-center col-6 flex-column">
            <h2>Uber</h2>
            <p>Help Center</p>
            <p>English</p>
            <p>Frankurt</p>
            <img
              src="https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/b5bc5aec0cbd8d48b47a447140043cdc.svg"
              alt=".."
            />
            <img
              src="https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/d5e4c298d2029a78333a44731948f699.svg"
              alt=".."
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-white">
          <div className="d-flex flex-column">
            <h2>About us</h2>
            <p>About us</p>
            <p>Newsroom</p>
            <p>Investor relations</p>
            <p>Global citizenship</p>
            <p>Safety</p>
            <p>Blog </p>
            <p>Careers</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-white">
          <div className="d-flex flex-column">
            <h2>Products</h2>
            <p>Ride</p>
            <p>Drive</p>
            <p>Eat</p>
            <p>Business</p>
            <p>Freight</p>
            <p>Health</p>
            <p>Uber Air</p>
            <p>Uber Works</p>
            <p>Advanced Technologies Group</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Bottom;
