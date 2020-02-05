import React, { useEffect, useState } from "react";
import axios from "axios";

function Add() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");

  const addDatahandler = () => {
    axios
      .post("http://localhost:5000/create", {
        items: item,
        quantity,
        purchased: false
      })
      .then(res => console.log(res));
    alert("Added To Your List");
  };
  return (
    <div className="text-center">
      <h2 className="bg-warning">Add Items To Shops</h2>

      <div className="col-md-4 m-auto">
        <label>Add Items</label>
        <input
          className="form-control"
          placeholder="Enter Item name"
          value={item}
          onChange={e => setItem(e.target.value)}
        />
        <label>Quantity</label>
        <select
          className="form-control"
          onChange={e => setQuantity(e.target.value)}
        >
          <option disabled selected>
            Select Quantity
          </option>
          <option>10</option>
          <option>20</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
        <button className="btn btn-success my-4" onClick={addDatahandler}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Add;
