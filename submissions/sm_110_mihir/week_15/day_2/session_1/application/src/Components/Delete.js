import React from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
export default function Delete(props) {
  let query = new URLSearchParams(props.location.search);
  let q1 = query.get("item");
  let q2 = query.get("quantity");
  let q3 = query.get("item_no");
  const handleDelete = () => {
    axios
      .post("http://localhost:5000/delete", { item_no: q3 })
      .then(res => alert(res.data.message))
      .catch(err => console.log(err.data));
  };
  return (
    <div>
      <div className="alert alert-danger">
        Are sure you want to delete item:{q1}, quantity:{q2}
        <br />
        <button onClick={handleDelete} className="btn btn-warning">
          Delete
        </button>
        <button className="btn btn-outline-primary">
          <Link to="/">Cancel</Link>
        </button>
      </div>
      <button className="btn btn-outline-primary">
        <Link to="/">Home Page</Link>
      </button>
    </div>
  );
}
