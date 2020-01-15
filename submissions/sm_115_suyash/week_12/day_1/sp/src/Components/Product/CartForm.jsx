import React from "react";

function CartForm(props) {
  return (
    <div>
      <p className="py-2 px-3 bg-dark text-white h3 col-2">
        Total: {props.sum}
      </p>

      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item Name</th>
            <th scope="col">Item Id</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {props.cartData.map((val, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{val.name}</td>
                <td>{val.id}</td>
                <td>{val.desc}</td>
                <td>{val.category}</td>
                <td>{val.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CartForm;
