import React from "react";

export default function Stockbroker() {
  return (
    <div className="row d-flex container mx-4">
      <div className="col-lg-6 col-md-8 col-12">
        <div className="col-9">
          <img
            src="https://zerodha.com/static/images/largest-broker.svg"
            alt="banner"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="col-lg-6 col-md-8 col-12 my-4">
        <div className="d-flex flex-column">
          <h2>Largest stock broker in India</h2>
          <p style={{ fontSize: "14px" }}>
            1.5+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row" style={{ fontSize: "14px" }}>
            <ul className="col-lg-5 col-md-12 col-12 mx-1">
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>
            <ul className="col-lg-6 col-md-12 col-12 mx-1">
              <li>Stocks and IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. Securities</li>
            </ul>
            <img
              src="https://zerodha.com/static/images/press-logos.png"
              alt="press"
              className="col-lg-10 col-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
