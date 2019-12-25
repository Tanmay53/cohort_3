import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

export default class ProductItem extends Component {
  render() {
    return (
      <div className="container-fluid text-center p-3">
        <div className="col-3 d-flex">
          <div className="m-2 mens border">
            <Link to="/product/mens">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIygFhPSqQoNBoo39LLU1jaMrm2nnkMPTuDXudPLnILTpo3eeZ&s"
                alt=""
              />
              <h3>Mens</h3>
            </Link>
          </div>
          <div className="m-2 womens border text-center">
            <Link to="/product/women">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcNJyBwoYNkgCq9P64YQpvqWocDvlBbKjH58rQMUjVo4vXioBvJQ&s"
                alt=""
              />
              <h3>Womens</h3>
            </Link>
          </div>
          <div className="m-2 kids border">
            <Link to="/product/kids">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ofQy3ednAiBiJqBOeH6TozUFGyG53KoFuMWMhaa_l_e6qxv2&s"
                alt=""
              />
              <h3>Kids</h3>
            </Link>
          </div>
          <div className="m-2 technology border">
            <Link to="/product/technology">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCOEAAyRMcOAOXWTAa7lgc0SRoQlTfP-e9ktUwnMbs2c0KvzrG&s"
                alt=""
              />
              <h3>Technology</h3>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
