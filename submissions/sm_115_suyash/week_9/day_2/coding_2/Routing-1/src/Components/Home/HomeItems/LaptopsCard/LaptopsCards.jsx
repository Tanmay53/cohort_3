import React from "react";
import { Link } from "react-router-dom";

function LaptopsCards(props) {
  return (
    <div className="col-3">
      <div className="card mr-4 border-0" style={{ width: "17rem" }}>
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title mb-0 pb-1 font-weight-bold">
            {props.title}
          </h5>
          <p className="card-text sm-font">{props.text}</p>
          <Link to="/shopnow" className="sm-font font-weight-bold">
            <p>{props.link}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LaptopsCards;
