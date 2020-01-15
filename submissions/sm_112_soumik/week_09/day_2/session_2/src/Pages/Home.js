import React from "react";
import { Link, Route } from "react-router-dom";

function Product() {
  return (
    <div>
      <h2>Show Product</h2>
    </div>
  );
}

function Home(props) {
  return (
    <div className="row text-center">
      {props.isAuth ? (
        <div className="col-md-12 my-3">
          <button className="btn btn-danger margin-auto" onClick={props.logout}>
            Logout
          </button>
        </div>
      ) : (
        <marquee>
          <small>You need to login to add to cart.</small>
        </marquee>
      )}
      {props.data.map(item => {
        return (
          <div className="card col-md-4 p-0" key={item.id}>
            <img
              className="cartImg card-img-top"
              src={item.img}
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{item.productName}</h5>

              <Link to={`/${item.id}`}>
                <button className="btn btn-info">View Product</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
