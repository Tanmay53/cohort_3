import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
          <div className="container-fluid ">
            <div className="row">
              <div className="col-10 text-center">
                <h3>Trusted the world over</h3>
                <p>
                  Teams of every size, shape and sort have already made Slack
                  the place where their work happens.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-10 justify-content-center m-auto">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      className="active"
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
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://via.placeholder.com/300x200.png" className="d-block w-100" alt="demo1" />
                    </div>
                    <div className="carousel-item">
                      <img src="https://via.placeholder.com/300x200.png" className="d-block w-100" alt="demo2" />
                    </div>
                    <div className="carousel-item">
                      <img src="https://via.placeholder.com/300x200.png" className="d-block w-100" alt="demo-3" />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
