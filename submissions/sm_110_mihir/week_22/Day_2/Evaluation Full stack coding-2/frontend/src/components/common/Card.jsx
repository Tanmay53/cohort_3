import React from "react";
export default function Card(props) {
  console.log(props);
  return (
    <div>
      <div className="card m-2" style={{ width: "16rem" }}>
        <img
          className="card-img-top"
          src={props.img}
          alt={props.product_name}
        />
        <div className="card-body">
          <h5 className="card-title">{props.product_name}</h5>
          <p className="card-text text-muted">
            Category: {props.category_name}
          </p>
        </div>
        <div className="card-footer">Price: ₹{props.price}</div>
      </div>
    </div>
  );
}
