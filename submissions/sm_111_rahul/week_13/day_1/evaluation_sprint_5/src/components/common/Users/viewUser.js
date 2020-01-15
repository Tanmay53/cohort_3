/** @format */

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ViewUser({ match, data }) {
  const user = data.find(user => {
    return match.params.id == user.id;
  });
  let condition = false;
  if (user !== undefined) {
    condition = true;
  }
  return (
    <div className="d-flex justify-content-center align-items-center ">
      {condition ? (
        <div className=" border  col-lg-6 col-md-8 col-12 p-5 my-3 bg-white">
          <ul className="list-group">
            <h3 className="bg-dark text-white">Name : {user.name}</h3>
            <li className="list-group-item">Email : {user.email}</li>
            <li className="list-group-item">Age : {user.age}</li>
            <li className="list-group-item">
              Loan Amount : Rs {user.loanAmount}
            </li>
            <li className="list-group-item">Loan Type : {user.loanType}</li>
          </ul>

          <button className="btn my-2 ml-5">
            <Link to={`${match.url}/update`}>Update User Data</Link>
          </button>
          <Link className="btn btn-danger mx-3" to="/">
            Home
          </Link>
        </div>
      ) : (
        <h2 className="text-center">User Not Found !!</h2>
      )}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps)(ViewUser);
