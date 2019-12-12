import React from "react";

const Restrocard = props => {
  return (
    <div className="container col-6 ">
      <div className="card mb-3 border border-dark flex">
        <div className="row no-gutters">
          <div className="col-lg-4 col-md-4 col-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl3t7oYX10nwqMngmH0zY1wMumAPzwWIyC_p2gWOcTjP15mrsS&s"
              className="img-fluid change"
            ></img>
          </div>
          <div className="col-lg-6 col-md-6 col-6">
            <div className="card-title">
              <span className="h2 text-info">{props.name}</span>
            </div>
            <p className="card-text">Continetal , {props.category}</p>
            <p className="card-text text-danger">
              Min:{props.cost} $, Up to 30 Min
            </p>
            <p>{props.payment}</p>
            <div className="card-row">
              <button className="btn btn-outline-info">Order Online</button>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="border border-dark bg-success px-3 text-white py-1">
              {props.rate}
            </div>
            <div className="px-3 py-1 border">{props.votes} Votes</div>
            <div className="px-3 py-1 border">{props.review} Reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restrocard;
