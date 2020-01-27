import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
  //   console.log(props.match);
  let id = props.match.params.id;
  let item = props.data.find(ele => {
    return id === ele.id;
  });
  //   console.log(item);
  return (
    <div>
      <div className="col-md-6 offset-3">
        <div className="card">
          <img className="cardImg" src={item.img} alt="Card image cap" />
          <div className="card-body text-center">
            <h5 className="card-title">{item.productName}</h5>
            <p className="card-text">{item.desc}</p>
            <p className="card-text">{item.price}</p>

            <Link to="/cart">
              <button
                onClick={() => props.addCart(item)}
                className="btn btn-info"
              >
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
