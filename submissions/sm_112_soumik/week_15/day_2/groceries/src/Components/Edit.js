import React, { useState, useEffect } from "react";
import axios from "axios";

function Edit(props) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  useEffect(() => {
    let item_no = props.match.params.item;
    axios
      .get("http://localhost:5000/match" + "/" + item_no)
      .then(res => setItem(res.data[0].items));
  }, []);

  const submitHandler = () => {
    let item_no = props.match.params.item;
    axios.post("http://localhost:5000/edit/" + +item_no, {
      items: item,
      quantity,
      purchased: "False"
    });
    alert("Edit succesfull !");
  };
  return (
    <div>
      <h2>Edit Page</h2>
      <div className="col-md-4 m-auto">
        <label>Add New Item</label>
        <input
          className="form-control"
          placeholder="Enter Item name"
          value={item}
          onChange={e => setItem(e.target.value)}
        />
        <label>Select Quantity</label>
        <select
          className="form-control"
          onChange={e => setQuantity(e.target.value)}
        >
          <option>10</option>
          <option>20</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
        <button className="btn btn-success my-4" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Edit;
