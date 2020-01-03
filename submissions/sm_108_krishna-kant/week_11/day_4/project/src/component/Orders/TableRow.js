import React from 'react';

const TableRow = props => (
  <tr>
    <td>{props.order.orderNumber}</td>
    <td>{props.order.fname + props.order.lname}</td>
    <td>{props.order.mobile}</td>
    <td>{props.order.trip.to}</td>
    <td>{props.order.trip.from}</td>
    <td>{props.order.carDetails.Name}</td>
    <td>
      {((210 / props.order.carDetails.Miles_per_Gallon) * 72).toFixed(2)} INR
    </td>
  </tr>
);

export default TableRow;
