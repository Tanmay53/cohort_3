import React from "react";
import "./XboxOne.css";
import { Link } from "react-router-dom";

function XboxOne() {
  return (
    <div className="backimg d-flex align-items-center">
      <div className="pl-5 ml-3 ">
        <h5 className="font-weight-bold text-white">Xbox One S</h5>
        <p className="text-white">
          The ultimate games and 4K Ultra HD entertainment system
        </p>
        <Link
          to="/cart"
          className="text-white font-weight-bold bg-dark py-2 px-3"
        >
          LEARN MORE <span className="font-weight-normal"> &nbsp; ></span>
        </Link>
      </div>
    </div>
  );
}

export default XboxOne;
