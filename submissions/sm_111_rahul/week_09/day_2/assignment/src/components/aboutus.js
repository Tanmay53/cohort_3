/** @format */

import React, { Component } from "react";
class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card">
            <div
              className="card-body"
              style={{ fontFamily: "Lora, serif", fontSize: "22px" }}
            >
              Apple Inc. is an American multinational technology company
              headquartered in Cupertino, California, that designs, develops,
              and sells consumer electronics, computer software, and online
              services.<br></br>
              It is considered one of the Big Four technology companies, along
              with Amazon, Google, and Facebook.<br></br>
              Apple was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne
              in April 1976 to develop and sell Wozniak's Apple I personal
              computer, though Wayne sold his share back within 12 days.{" "}
              <br></br> It was incorporated as Apple Computer, Inc., in January
              1977.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 card p-2">
            <img
              className="card-img-top"
              src="applebackground.jpg"
              alt=""
              height="240px"
            />
            <div className="card-body">
              <h2 className="bg-primary card-header text-light text-center">
                Iphone
              </h2>
              <p
                className="card-text"
                style={{ fontFamily: "Lora, serif", fontSize: "22px" }}
              >
                At the Macworld Conference & Expo in January 2007, Steve Jobs
                introduced the long-anticipated iPhone, a convergence of an
                Internet-enabled smartphone and iPod.<br></br>A second version,
                the iPhone 3G, was released on July 11, 2008, with a reduced
                price of $199 for the 8 GB model and $299 for the 16 GB model.
                <br></br>
                On September 10, 2019, Apple introduced the iPhone 11, iPhone 11
                Pro, and the iPhone 11 Pro Max.<br></br>
                Overall, the iPhone 11 retains the same glass and aluminum
                design as the iPho while adding in new features such as the
                addition of an Ultra-Wide 12mp camera
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 card p-2">
            <img
              className="card-img-top img-fluid"
              src="macpro16.jpg"
              alt=""
              height="240px"
            />
            <div className="card-body">
              <h2 className="bg-primary card-header text-light text-center">
                Mac
              </h2>
              <p
                className="card-text"
                style={{ fontFamily: "Lora, serif", fontSize: "22px" }}
              >
                iMac is a family of all-in-one Macintosh desktop computers
                designed and built by Apple Inc. <br></br>
                It has been the primary part of Apple's consumer desktop
                offerings since its debut in August 1998, and has evolved
                through seven distinct forms.<br></br>
                In March of 2019, Apple updated the iMac to feature
                9th-generation Intel Core i9 processors and Radeon Vega
                graphics.<br></br>
                For the first time, the iMac can support 6-core or 8-core Intel
                processors. Apple claims the 21.5-inch model is up to 60% faster
                than the previous model, and the 27-inch is up to 2.4 times
                faster.<br></br>
                The exterior of the machine remained the same as the previous
                model.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 card p-2">
            <img
              className="card-img-top img-fluid"
              src="ipodPro.jpg"
              alt=""
              height="240px"
            />
            <div className="card-body">
              <h2 className="bg-primary card-header text-light text-center">
                Ipod
              </h2>
              <p
                className="card-text"
                style={{ fontFamily: "Lora, serif", fontSize: "22px" }}
              >
                On October 23, 2001, Apple introduced the iPod digital music
                player. <br></br>
                Several updated models have since been introduced, and the iPod
                brand is now the market leader in portable music players by a
                significant margin. <br></br>
                More than 390 million units have shipped as of September 2015.
                <br></br>
                Apple has partnered with Nike to offer the Nike+iPod Sports Kit,
                enabling runners to synchronize and monitor their runs with
                iTunes and the Nike+ website.<br></br>
                In late July 2017, Apple discontinued its iPod Nano and iPod
                Shuffle models, leaving only the iPod Touch available for
                purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
