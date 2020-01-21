/** @format */

import React from "react";
import { Link } from "react-router-dom";

export default function UserTable({ data, handleSort, deleteUser, match }) {
  return (
    <div className="table-responsive">
      <table className="p-5 table ">
        <thead className="bg-danger text-white">
          <tr>
            <td>Name</td>
            <td>
              <span>
                <button onClick={handleSort} className="btn btn-danger">
                  Cibil Score(Click to sort)
                </button>
              </span>
            </td>
            <td>Email</td>
            <td>Delete User</td>
            <td>More Details</td>
          </tr>
        </thead>
        <tbody>
          {data.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.cibilScore}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                    className="bg-danger px-2 text-white"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link className="btn btn-info" to={`${match.url}/${user.id}`}>
                    update and view
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="container p-3">
        <Link className="btn-lg btn-danger nav-link mx-3" to="/">
          Home
        </Link>
      </div>
    </div>
  );
}
