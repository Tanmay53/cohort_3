import React from "react";
import ProductCollection from "./ProductCollection";
import { Route } from "react-router-dom";

var Card = props => {
  return (
    <div className="row p-5">
      {ProductCollection.technology.map(ele => {
        return (
          <div
            key={ele.id}
            className="card col-lg-3 p-5 text-center col-md-6 col-12 mx-4"
          >
            <div className="col-lg-10 col-md-10 col-12">
              <img src={ele.img} alt="" className="img-fluid" />
            </div>
            <div className="card-body">
              <h4>{ele.name}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function Technology(props) {
  return (
    <div>
      <Route path="/product/technology" exact component={Card} />
    </div>
  );
}
