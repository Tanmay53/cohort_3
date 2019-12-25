import React from "react";
import ProductCollection from "./ProductCollection";
import { Route } from "react-router-dom";
import Card from "./Card";

var MensItem = props => {
  return (
    <div className="row p-5 d-flex justify-content-center">
      <table className="table col-5 text-center">
        {ProductCollection.mens.map(ele => {
          return (
            <Card key={ele.id} name={ele.name} img={ele.img} id={ele.id} />
          );
        })}
      </table>
    </div>
  );
};

export default function Mens(props) {
  return (
    <div>
      <MensItem />
    </div>
  );
}
