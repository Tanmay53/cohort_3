import React from "react";
import { Link } from "react-router-dom";
var Landing = () => {
  return (
    <div className="row my-5 d-flex flex-column text-center justify-content-center align-items-center container-fluid">
      <div className="col-lg-4 col-md-6 col-8">
        <img
          src="https://zerodha.com/static/images/landing.png"
          alt="landing"
          className="img-fluid"
        />
      </div>
      <h1>Invest in everything</h1>
      <p>
        Online platform to invest in stocks, derivatives, mutual funds, and more
      </p>
      <button className="btn btn-info my-2">
        <Link style={{ color: "white", textDecoration: "none" }} to="/singup">
          Sign up now
        </Link>
      </button>
    </div>
  );
};
export default Landing;
