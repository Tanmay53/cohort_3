/** @format */

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="">
      <Link to="/addUser">
        <button className="btn-lg btn-primary p-3 m-3">Add New Users </button>
      </Link>
      <Link to="/viewAllUsers">
        <button className="btn-lg btn-primary p-3 m-3">View All Users</button>
      </Link>
    </div>
  );
}
