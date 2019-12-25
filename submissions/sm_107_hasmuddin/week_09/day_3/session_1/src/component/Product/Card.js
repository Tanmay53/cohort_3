import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
  var { id, img, name, more, path, priceCondition, price } = props;
  return (
    <>
      <tr className="border ">
        <td colSpan="3">
          <img src={img} alt="" className="img-fluid" />
        </td>
      </tr>
      <tr className="border bg-light">
        <td>
          <h5>{name}</h5>
        </td>
        <td>
          <button className="btn btn-info">Add to cart</button>
        </td>
        <td>
          {more ? (
            <Link to={`${path}/${id}`}>
              <button className="btn btn-danger">More</button>
            </Link>
          ) : (
            <p></p>
          )}
        </td>
      </tr>
      <tr className="border bg-light">
        <td colSpan="3">
          {priceCondition ? (
            <h2>
              <span className="text-info">Price</span> : {price} &#x20b9;
            </h2>
          ) : (
            <p></p>
          )}
        </td>
      </tr>
      <br />
    </>
  );
};
export default Card;
