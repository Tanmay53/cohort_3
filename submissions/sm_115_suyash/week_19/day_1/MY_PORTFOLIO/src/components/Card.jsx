import React from "react";

export default function Card(props) {
  return (
    <div className="col-md-4 mb-4 h-100">
      <div className="card p-3 my-card h-100">
        <img
          src={props.img}
          className="card-img-top"
          alt="..."
          height="180px"
        />
        <div className="card-body">
          <h5 className="card-title poppins">{props.title}</h5>
          <p className="card-text poppins">{props.para}</p>
          <a
            href={props.linkSrc}
            className="btn btn-primary cv-btn mx-2"
            target="_blank"
          >
            Demo
          </a>
          <a
            href={props.gitSrc}
            className="btn btn-primary cv-btn"
            target="_blank"
          >
            Source Code
          </a>
          <div className="card-logo">
            {props.arr.map(ele => {
              return <img src={ele} className="mr-2 mt-3" height="40px" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
