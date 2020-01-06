import React from "react";
import "./card.css";

function card(props) {
  return (
    <div className="col-4 text-left">
      <div className="card mb-3" style={{ maxWidth: "400px" }}>
        <div className="row no-gutters">
          <div className="col-md-3 mt-3">
            <img
              src={props.img}
              className="pl-2 card-img"
              alt="..."
              height="120px"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body m-0 p-0 pt-2 pl-3 pb-4">
              <h5 className="card-title pb-1 mb-0  text-danger ">
                {props.title}
              </h5>
              <p className="card-text m-0 p-0 pb-1 text-muted font-100">
                {props.catger}
              </p>
              <p className="card-text m-0 p-0 pb-1 text-muted  font-100">
                Cost {props.cost} for one
              </p>
              <p className="card-text m-0 p-0 pb-1 font-100">
                Payment Method: {props.payMethod}
              </p>
              <p className="card-text m-0 p-0  font-100">
                Devlivery in {props.min} min
              </p>
            </div>
          </div>
          <div className="col-3 text-right pr-3">
            <div className="card-body m-0 p-0 pt-2 pl-3 pb-4">
              <span className="card-title pb-1 mt-3 p-0 mb-0  text-white bg-success px-2 rounded h4">
                {props.star}
              </span>
              <p className="font-100 text-muted pt-1 p-0 m-0">
                {props.votes} votes
              </p>
              <p className="font-100 text-muted p-0 m-0">
                {props.reviews} reviews
              </p>
            </div>
          </div>
          <div className="col-12  border-bottom"></div>
          <div className="col-8"></div>
          <div className="col-4 border-left text-center">
            <p className="pt-2">
              <a href="#" className="text-success">
                Order Online >
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default card;
