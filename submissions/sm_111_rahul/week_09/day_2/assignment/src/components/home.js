/** @format */

import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <div>
        <div
          className="container-fluid text-center"
          style={{ background: "black", color: "white" }}
        >
          <h1>Mega Offer(60%off)</h1>
          <p className="display-4">IPhone11 Pro</p>
          <div className="container-fluid d-flex justify-content-center">
            <img
              src="applebackground.jpg"
              alt="backpic"
              className="d-none d-sm-block"
            ></img>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <img src="iphonestack.jpg" className="img-fluid" alt=""></img>
          </div>
          <div className="row my-3">
            <div
              className="col-12  col-lg-6 my-3"
              style={{ backgroundColor: "white" }}
            >
              <div className="row justify-content-center">
                <img src="macpro16.jpg" className="img-fluid" alt=""></img>
              </div>
              <div className="row justify-content-center">
                <h1>Mac Pro 16</h1>
              </div>
            </div>
            <div
              className="col-12  col-lg-6 my-3"
              style={{ backgroundColor: "black", color: "white" }}
            >
              <div className="row justify-content-center">
                <img src="ipodPro.jpg" className="img-fluid mt-4" alt=""></img>
              </div>
              <div className="row justify-content-center">
                <h1 className="mt-lg-3 pt-lg-3">Ipod Pro</h1>
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div
              className="col-12  col-lg-6 my-3"
              style={{ backgroundColor: "black", color: "white" }}
            >
              <div className="row justify-content-center">
                <img src="iphone.jpg" width="35%" alt=""></img>
              </div>
              <div className="row justify-content-center ">
                <h1 className="mt-lg-3 pt-lg-3">IPhone</h1>
              </div>
            </div>
            <div
              className="col-12  col-lg-6 my-3"
              style={{ backgroundColor: "white" }}
            >
              <div className="row justify-content-center">
                <img src="homepod.jpg" width="50%" alt=""></img>
              </div>
              <div className="row justify-content-center">
                <h1>Home Pod</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
