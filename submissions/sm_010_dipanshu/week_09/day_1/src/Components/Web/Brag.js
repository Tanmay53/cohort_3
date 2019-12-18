import React from "react";
import "./Brag.css";

function Brag() {
  return (
    <div className="col-9 mx-auto">
      <div className="card bg-dark text-dark border-0">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1280/v1556927537/assets/e4/ade93c-0b7b-4990-bda4-afef96793277/original/Modalities_banner_home.jpg"
          className="card-img"
        />

        <div className="card-img-overlay overlay-place">
          <h2 className="card-title font-weight-bold">Setting 700+</h2>
          <h2 className="card-title font-weight-bold">cities in motion</h2>
          <div className="mt-3">
            <a className="text-dark" href="">
              <u>View all cities</u>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Brag;
