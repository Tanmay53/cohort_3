import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="row">
      {props.data.map(item => {
        return (
          <div className="col-md-4 p-4 text-center">
            <img
              class="cartImg card-img-top"
              src={item.img}
              alt="Card image cap"
            ></img>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.productName}</h5>
                <p className="card-text">{item.desc}</p>
                <p className="card-text">{item.price}</p>
                <button className="btn btn-info">
                  <Link to="/cart">Add To Cart</Link>
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {props.isAuth ? (
        <button onClick={props.logout}>Logout</button>
      ) : (
        <marquee>
          <small>You need to login to add to cart.</small>
        </marquee>
      )}
    </div>
  );
}

export default Home;
