import React from "react";

const Banner = () => {
  return (
    <div className="container bg-primary p-5">
      <div className="form-row p-2 bg-white">
        <div className="mx-4">
          <div>
            <img src="https://img.icons8.com/metro/26/000000/high-connection.png" />
            <p>Earn</p>
          </div>
        </div>
        <div className="mx-4">
          <div>
            <img src="https://img.icons8.com/material-outlined/24/000000/vanpool.png" />
            <p>Ride</p>
          </div>
        </div>{" "}
        <div className="mx-4">
          <div>
            <img src="https://img.icons8.com/color/48/000000/popcorn.png" />
            <p>Eat</p>
          </div>
        </div>{" "}
        <div className="mx-4">
          <div>
            <img src="https://img.icons8.com/metro/26/000000/handle-with-care.png" />
            <p>Freight</p>
          </div>
        </div>{" "}
        <div className="mx-4">
          <div>
            <img src="https://img.icons8.com/bubbles/26/000000/business.png" />
            <p>Business</p>
          </div>
        </div>{" "}
        <div className="mx-4">
          <div>
            <img src="https://img.icons8.com/material-outlined/24/000000/work.png" />{" "}
            <p>Work</p>
          </div>
        </div>{" "}
        <div className="mx-4">
          <div>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/dirt-bike--v1.png" />{" "}
            <p>Bike</p>
          </div>
        </div>{" "}
        <div className="mx-4">
          <div>
            <img src="https://img.icons8.com/metro/26/000000/helicopter.png" />
            <p>Fly</p>
          </div>
        </div>
      </div>
      <div className="border d-flex flex-column bg-white col-6">
        <h2>Get in the driver seat and get paid</h2>
        <p>Drive on the Largest network of active riders</p>
        <button className="btn btn-dark p-3 my-2">Sign up for free</button>
        <input
          type="text"
          className="my-2"
          placeholder="Learn more about driving and delivering"
        />
      </div>
    </div>
  );
};

export default Banner;
