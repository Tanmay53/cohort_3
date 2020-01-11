import React from "react";

function LaptopsCards(props) {
  return (
    <div className="col-3">
      <div class="card mr-4 border-0" style={{ width: "17rem" }}>
        <img src={props.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title mb-0 pb-1 font-weight-bold">{props.title}</h5>
          <p class="card-text sm-font">{props.text}</p>
          <a href="#" class="sm-font font-weight-bold">
            <p>{props.link}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LaptopsCards;
