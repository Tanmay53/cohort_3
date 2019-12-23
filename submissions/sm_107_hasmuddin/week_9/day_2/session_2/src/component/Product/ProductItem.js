import React from "react";

export default function ProductItem() {
  return (
    <div className="d-flex justify-content-center container ">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-12">
          <div className="col-lg-12 col-10">
            <img
              src="https://zerodha.com/static/images/products-kite.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-lg-5 p-5 col-md-12 col-12">
          <h2>Kite</h2>
          <p>
            Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices.
          </p>
          <a href="#">Learn More</a>
        </div>
      </div>
    </div>
  );
}
