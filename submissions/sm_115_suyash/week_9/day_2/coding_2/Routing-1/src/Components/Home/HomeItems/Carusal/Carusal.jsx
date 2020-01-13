import React from "react";
import { Link } from "react-router-dom";

function Carusal() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1558864559-ed673ba3610b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
            className="d-block w-100"
            alt="..."
            height="415px"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="h4 pb-2  font-weight-bold">This is your 365</h5>
            <p className=" pb-2 sm-font">
              Discover what's possible every day with Office 365
            </p>
            <Link
              to="/cart"
              className="text-white bg-dark py-3 px-4 font-weight-bold"
            >
              Shop Now >>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1562136969-52ad483d6ff5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            className="d-block w-100"
            alt="..."
            height="415px"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="h4 pb-2 font-weight-bold">
              Go a touch above odinary
            </h5>
            <p className="pb-2">Surface Laptop 2</p>
            <Link
              to="/cart"
              className="text-dark bg-white py-2 px-4 font-weight-bold"
            >
              Shop Now >
            </Link>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carusal;
