/** @format */

import React, { Component } from "react";
class Pvr extends Component {
  render() {
    return (
      <div className="py-4">
        <header className="row bg-dark p-2">
          <div className="col-3">
            <img
              src="https://www.pvrcinemas.com/assets/images/favicon.png?version=5"
              height="80px"
              width="90px"
            ></img>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-9 form-group">
                <input
                  className="form-control bg-dark text-light"
                  placeholder="search"
                />
              </div>
              <div className="col-3 form-group">
                <input
                  className="form-control bg-dark text-light"
                  placeholder="search"
                />
              </div>
            </div>
            <div className="row ">
              <div className="col-7 float-left bg-dark text-light">
                <span className="">IMAX</span>
                <span className="p-2">4DX</span>
                <span className="p-2">Play House</span>
                <span className="p-2">Gold</span>
                <span className="p-2">P[XL]</span>
                <span className="p-2">ONYX</span>
                <span className="p-2">Director's Cut</span>
                <span className="p-2">D-box</span>
              </div>
              <div className="col-5 float-right bg-dark text-light">
                <span className="p-2">Vikaoo</span>
                <span className="p-2">Magazine</span>
                <span className="p-2">Cinema</span>
                <span className="p-2">Offers</span>
                <span className="p-2">Advetise</span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <img
              className="float-right"
              src="https://cdn.dribbble.com/users/1011558/screenshots/4615892/hamburger-03.gif"
              height="80px"
              width="80px"
            ></img>
          </div>
        </header>
        <div className="container-fluid my-2">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://static.toiimg.com/thumb/msid-64095461,width-640,resizemode-4/64095461.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://photos.asklaila.com/photos/1co/0BABQ1co/Movie-Theatre-Bangalore-PVR-Cinemas-0BABQ1co-4f338dd19b807_regular.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/pvr_cinemas_660_191119093937.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Pvr;
