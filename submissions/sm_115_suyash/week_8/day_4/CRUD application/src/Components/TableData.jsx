import React from "react";

function TableData(props) {
  return (
    <div>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Address</th>
            <th scope="col">Department</th>
            <th scope="col">Salary</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((val, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.address}</td>
                <td>{val.dep}</td>
                <td>{val.salary}</td>
                <td>
                  <button className="bg-warning py-1 px-2 rounded text-danger">
                    Edit
                  </button>
                </td>
                <td>
                  <button className="bg-warning py-1 px-2 rounded text-danger">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
