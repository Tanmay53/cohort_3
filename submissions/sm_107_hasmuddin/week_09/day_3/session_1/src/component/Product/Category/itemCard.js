import React from "react";

export default function itemCard(props) {
  var { img, name, desc, rating, price } = props;
  return (
    <div className="container row">
      <div className="col-lg-6 col-12">
        <img src={img} className="img-fluid" />
      </div>
      <div className="col-lg-6 col-12">
        <table className="table border shadow shadow-sm">
          <tr>
            <td>
              <h3> {name}</h3>
            </td>
          </tr>
          <tr>
            <td>Price : {price} &#x20b9;</td>
          </tr>
          <tr>
            <td>Rating: {rating}/5</td>
          </tr>
          <tr className="border ">
            <td>
              <span className="text-danger">Description : </span>
              {desc}
            </td>
          </tr>
          <tr>
            <td>
              <button className="btn btn-success ">Buy</button>
              <button className="btn btn-danger mx-5">Add to store</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
