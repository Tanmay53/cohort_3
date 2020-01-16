import React from "react";
import { Link } from "react-router-dom";

function Surface(props) {
  console.log("Surface>>>>>>>", props);
  return (
    <div className="text-center">
      <h3 className="text-center py-3 mt-2 bg-light">
        Get 20% off use coupon code "WANTSOLOUTION"
      </h3>
      <div className="mt-5 d-flex flex-wrap">
        {props.productArr.map(item => {
          return (
            <div class="card mb-5 mx-5 shadow" style={{ width: "18rem" }}>
              <img src={item.img} class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-text">{item.name}</h4>
                <h3 class="card-text">{item.price}</h3>
                <Link to={`${props.match.url}/${item.id}`}>
                  <button
                    className="text-white btn bg-dark"
                    value={item.price + " " + item.name}
                    onClick={e => props.clicked(e.target.value)}
                  >
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Surface;
