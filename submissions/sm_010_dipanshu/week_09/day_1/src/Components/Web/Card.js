import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="col-9 mx-auto">
      <div className="card bg-dark text-dark border-0">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,g_north,w_1822,h_1094/v1558483958/assets/3a/b709e3-54eb-4f13-8618-2bf08addf5dd/original/earn_2x.jpg"
          className="card-img"
        />

        <div className="card-img-overlay products row">
          <div className="card border-0 rounded-0 p-2">
            <img
              src="https://www.uber-assets.com/image/upload/v1558389718/assets/8e/33c8c0-f7e9-467c-924b-c70232943a47/original/Earn-filled.svg"
              className="mt-3"
              alt="..."
              height="30"
            />
            <div className="card-body text-center">
              <p className="card-text font-weight-bold">Earn</p>
            </div>
          </div>

          <div className="card  border-0 rounded-0 p-2">
            <img
              src="https://www.uber-assets.com/image/upload/v1542252540/assets/6d/87af17-3970-4d01-8936-1b0ba102ea6e/original/car-front-outlined.svg"
              className="mt-3"
              alt="..."
              height="30"
            />
            <div className="card-body text-center">
              <p className="card-text font-weight-bold">Ride</p>
            </div>
          </div>

          <div className="card border-0 rounded-0 p-2">
            <img
              src="https://www.uber-assets.com/image/upload/v1542256606/assets/7d/5a4852-3b2a-4466-96de-602dfb62dc1b/original/restaurant-outlined.svg"
              className="mt-3"
              alt="..."
              height="30"
            />
            <div className="card-body">
              <p className="card-text font-weight-bold">Eat</p>
            </div>
          </div>

          <div className="card border-0 rounded-0 p-2">
            <img
              src="https://www.uber-assets.com/image/upload/v1542257500/assets/14/aa5c19-33cc-4556-a8e3-8228253af608/original/truck-outlined.svg"
              className="mt-3"
              alt="..."
              height="30"
            />
            <div className="card-body">
              <p className="card-text font-weight-bold">Freight</p>
            </div>
          </div>

          <div className="card border-0 rounded-0 p-2">
            <img
              src="https://www.uber-assets.com/image/upload/v1542252354/assets/e3/24ab47-806e-493b-9df8-748763238cc8/original/briefcase-outlined.svg"
              className="mt-3"
              alt="..."
              height="30"
            />
            <div className="card-body">
              <p className="card-text font-weight-bold">Business</p>
            </div>
          </div>

          <div className="card border-0 rounded-0 p-2">
            <img
              src="https://www.uber-assets.com/image/upload/v1542255414/assets/5e/37af00-8b0a-48a2-adb3-fe19406d2d74/original/job-busser-outlined.svg"
              className="mt-3"
              alt="..."
              height="30"
            />
            <div className="card-body">
              <p className="card-text font-weight-bold">Work</p>
            </div>
          </div>

          <div className="card border-0 rounded-0 p-2">
            <img
              src="https://www.uber-assets.com/image/upload/v1542252195/assets/69/e1d56d-4b83-4878-aab5-c37ea291e188/original/bike-outlined.svg"
              className="mt-3"
              alt="..."
              height="30"
            />
            <div className="card-body">
              <p className="card-text font-weight-bold">Bike</p>
            </div>
          </div>

          <div className="card border-0 rounded-0 p-2">
            <img
              src="https://www.uber-assets.com/image/upload/v1573109528/assets/7b/1cae91-fbf4-4e3e-9537-006b4a0dc3bc/original/copter_outlined.svg"
              className="mt-3"
              alt="..."
              height="30"
            />
            <div className="card-body">
              <p className="card-text font-weight-bold">Fly</p>
            </div>
          </div>
        </div>

        <div className="card-img-overlay overlay-placement bg-light">
          <h2 className="card-title font-weight-bold">Get in the</h2>
          <h2 className="card-title font-weight-bold">
            driver's seat and get paid
          </h2>
          <p className="card-text small mt-3">
            Drive on the largest network of active riders.
          </p>
          <button className="btn text-light dark rounded-0 font-weight-bold mt-3">
            <span className="ml-3 mr-3">Sign up to drive</span>
          </button>
          <div className="mt-3">
            <a className="small text-dark" href="">
              <u>Learn more about driving and delivering</u>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
