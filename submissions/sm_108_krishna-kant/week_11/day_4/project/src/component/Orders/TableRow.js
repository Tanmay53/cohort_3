import React from 'react';

const TableRow = props => (
  <tr className='row'>
    <td className='col'>{props.order.orderNumber}</td>
    <td className='col'>{props.order.fname + props.order.lname}</td>
    <td className='col'>{props.order.mobile}</td>
    <td className='col'>{props.order.trip.to}</td>
    <td className='col'>{props.order.trip.from}</td>
    <td className='col'>{props.order.carDetails.Name}</td>
    <td className='col'>
      {Math.round((210 / props.order.carDetails.Miles_per_Gallon) * 72)}
      INR
    </td>
  </tr>
);

export default TableRow;
