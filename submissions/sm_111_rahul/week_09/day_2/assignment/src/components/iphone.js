/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";
class Iphone extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {console.log(this.props.data)}
          {this.props.data.iphone.map(ele => {
            return (
              <div key={ele.id} className="card col-12 col-md-6 col-lg-4 p-3">
                <div className="card-header">
                  <p className="h1 text-center text-primary">{ele.name}</p>
                </div>
                <div className="card-body">
                  <img src={ele.avatar} alt="" className="img-fluid"></img>
                </div>
                <div className="card-footer text-center">
                  <Link
                    to={`${this.props.match.url}/${ele.id}`}
                    className="stretched-link"
                  >
                    {ele.name}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Iphone;
