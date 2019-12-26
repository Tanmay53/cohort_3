import React from "react";
var style = {
  fontSize: "14px"
};

export default function Rate() {
  return (
    <div className="d-flex justify-content-center">
      <div className="row container justify-content-center">
        <div className="col-lg-4  col-10 text-center">
          <img
            src="https://zerodha.com/static/images/pricing-eq.svg"
            alt="zero"
            className="img-fluid"
          />
          <h4>Free equity delivery</h4>
          <p style={style}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-lg-4 col-10">
          <img
            src="https://zerodha.com/static/images/other-trades.svg"
            alt="twenty"
            className="img-fluid"
          />
          <h4>Intraday and F/O trades</h4>
          <p style={style}>
            Flat ₹ 20 or 0.01% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>{" "}
        <div className="col-lg-4 col-10">
          <img
            src="https://zerodha.com/static/images/pricing-eq.svg"
            alt="zero"
            className="img-fluid"
          />
          <h4>Free direct MF</h4>
          <p style={style}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}
