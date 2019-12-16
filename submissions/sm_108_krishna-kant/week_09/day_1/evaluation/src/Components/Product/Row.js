import React from 'react';

const Row = props => {
  return (
    <tr>
      <td>{props.data.pName}</td>
      <td>{props.data.pID}</td>
      <td>{props.data.sName}</td>
      <td>{props.data.pCatagory}</td>
      <td>{props.data.pCOD.toString()}</td>
      <td>{props.data.pQuantity} KG</td>
    </tr>
  );
};

export default Row;
