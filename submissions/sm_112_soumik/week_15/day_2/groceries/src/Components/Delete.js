import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Delete(props) {
  let item = "";
  item = props.match.params.item;
  useEffect(() => {
    axios
      .post(`http://localhost:5000/delete/${item}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <h2>Item Deleted</h2>
      <Link className="text-dark" to="/">
        Back To Home
      </Link>
    </div>
  );
}

export default Delete;
