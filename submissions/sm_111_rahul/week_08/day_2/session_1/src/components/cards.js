/** @format */

import React, { Component } from "react";
import "../components/cards.css";
function Card(props) {
  return (
    <div className="">
      <div className="col-5 p-2">
        <div className="card" style={{ width: "22rem" }}>
          <img
            style={{ height: "200px" }}
            src={props.url}
            class="card-img-top"
            alt="Recipes"
          />
          <div className="card-body">
            <h3 className="card-title text-danger">{props.title}</h3>
            {props.category.map(ele => {
              return <span className="text-dark">{ele}</span>;
            })}
            <p className="card-text">
              {props.id} <span>{props.votes} Votes</span>
              <span>{props.reviews} reviews</span>
              <span>{props.ratings} Star</span>
              <h6>{props.payment}</h6>
              <h6>Rs {props.cost} per item</h6>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
