import React from "react";
import { Link } from "react-router-dom";

export default function Table({ datasource }) {
  return (
    <table className="ant-table">
      <thead>
        <tr>
          <th>Source</th>
          <th>Destination</th>
          <th>Bus</th>
          <th>Schedule</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {datasource.map(item => (
          <tr key={item.id}>
            <td>{item.source}</td>
            <td>{item.destination}</td>
            <td>{item.bus_pid}</td>
            <td>{item.start_time}</td>
            <td>
              <Link to="/edit">Edit</Link>
            </td>
            <td>
              <Link to="/edit">Delete</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
