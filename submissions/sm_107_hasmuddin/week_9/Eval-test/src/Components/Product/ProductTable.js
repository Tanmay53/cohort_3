import React from "react";

const ProductTable = props => {
  return (
    <tr>
      <td>{props.data.productId}</td>
      <td>{props.data.productName}</td>
      <td>{props.data.sellerName}</td>
      <td>{props.data.category}</td>
      <td>{props.data.qty}</td>
    </tr>
  );
};
export default ProductTable;
