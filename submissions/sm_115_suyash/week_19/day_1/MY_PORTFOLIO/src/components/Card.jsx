import React from "react";

export default function Card(props) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card p-3 my-card" >
        <img src={props.img} className="card-img-top" alt="..." height="180px"/>
        <div className="card-body">
          <h5 className="card-title poppins">{props.title}</h5>
          <p className="card-text poppins">{props.para}</p>
          <a href={props.linkSrc} className="btn btn-primary nothingCall cv-btn" target="_blank">
            {props.link}
          </a>
          <div className="card-logo">
                {props.arr.map(ele => {
                  return (
                    <img src={ele} className="mr-2 mt-3" height="40px"/>
                  )
                })}
          </div>
        </div>
      </div>
    </div>
  );
}
