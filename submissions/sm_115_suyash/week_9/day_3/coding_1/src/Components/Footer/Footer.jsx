import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container-fluid">
      <div className="bg-dark text-white pt-4 row">
        <div className="col-4">
          <ul className="listStyle">
            <li className="font-weight-bold sm-font mb-2 pt-4">Company</li>
            <li>
              <a className="text-light " href="#">
                <small>About Computer Solution</small>
              </a>
            </li>
            <li>
              <a className="text-light " href="#">
                <small>Investers</small>
              </a>
            </li>
            <li>
              <a className="text-light " href="#">
                <small>Privacy</small>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="listStyle">
            <li className="font-weight-bold sm-font mb-2 pt-4">Contact Us</li>
            <li>
              <i className="fas fa-hotel mr-1"></i>
              <small>Address: 91, spring</small>
            </li>
            <li>
              <i className="fas fa-phone mr-1"></i>
              <small>phone: +15005555000</small>
            </li>
            <li>
              <i className="fas fa-envelope mr-1"></i>
              <small>email: computertosolution@gmail.com</small>
            </li>
          </ul>
        </div>
        <div className="col-3 offset-1">
          <p className="font-weight-bold sm-font mb-3 pt-4">
            Follow @ Computer Solution
          </p>
          <ul className="d-flex listStyle  text-center">
            <li className="mr-3">
              <a href="https://www.facebook.com/" target="_target">
                <i className=" fab fa-facebook fa-2x text-primary "></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                className="mr-3 "
                target="_target"
              >
                <i className=" fab fa-twitter-square fa-2x text-info  "></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                className="mr-3"
                target="_target"
              >
                <i className=" fab fa-youtube fa-2x text-danger bg-white"></i>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="pb-3 pt-4 col-12 text-white"
          style={{ background: "#444444" }}
        >
          <p className="text-center sm-font">
            <span className="">COMPUTER SOLUTION</span> &copy; 2020, All RIghts
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
