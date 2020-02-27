import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <div>
      <div className="card" style={{ width: "16rem" }}>
        <img className="card-img-top" src={props.img} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">{props.body}</p>
        </div>
      </div>
    </div>
  );
}
