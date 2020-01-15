import React from "react";
import { Link } from "react-router-dom";

function Surface(props) {
  console.log("Surface>>>>>>>", props);
  return (
    <div>
      {props.productArr.map(item => {
        return (
          <div class="card mb-3" style={{ width: "18rem" }}>
            <img src={item.img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-text">{item.name}</h4>
              <h3 class="card-text">{item.price}</h3>
              <Link to={`${props.match.url}/${item.id}`}>
                <button
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
  );
}

export default Surface;
