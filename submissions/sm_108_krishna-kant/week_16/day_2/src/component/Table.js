import React from "react";

export default function Table({ items }) {
  return (
    <div className="px-5 py-2">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>MOBILE</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.Name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.age}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No Data Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
