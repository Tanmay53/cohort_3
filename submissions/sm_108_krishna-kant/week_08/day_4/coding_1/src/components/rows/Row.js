import React from 'react';

const Row = props => {
  return (
    <tr>
      <td>{props.employee.name}</td>
      <td>{props.employee.age}</td>
      <td>{props.employee.address}</td>
      <td>{props.employee.department}</td>
      <td>{props.employee.salary}</td>
      <td>
        <a href='#'>
          <i className='fas fa-trash-alt text-danger'></i>
        </a>
      </td>
    </tr>
  );
};

export default Row;
