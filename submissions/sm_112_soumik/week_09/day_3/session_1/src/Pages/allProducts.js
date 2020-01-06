import React from "react";
import { Link, Route } from "react-router-dom";

const Products = props => {
  console.log(props);
  return (
    <div className="row">
      {props.data.map(item => {
        return (
          <div className="col-md-3" key={item.id}>
            <div className="card">
              <div className="card-body">
                <img src={item.img} />
                <h2 className="card-text">{item.item_name}</h2>
                <div className="row">
                  <div className="col-md-4">
                    <button className="btn btn-danger text-ligth">
                      <Link to={`product/${item.id}`}>Show details</Link>
                    </button>
                  </div>
                  <div className="col-md-4 offset-2">
                    <button className="btn btn-danger text-ligth">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
