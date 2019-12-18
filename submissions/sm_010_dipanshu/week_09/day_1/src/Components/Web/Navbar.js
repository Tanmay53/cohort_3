import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="dark">
        <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-center">
          <div className="col-6">
            <div
              className="collapse navbar-collapse small"
              id="navbarSupportedContent"
            >
              <h4 className="navbar-item text-light mr-2">Uber</h4>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-light" href="">
                    Products
                  </a>
                </li>
                <li className="nav-item ml-2">
                  <a className="nav-link text-light" href="">
                    Company
                  </a>
                </li>
                <li className="nav-item ml-2">
                  <a className="nav-link text-light" href="">
                    Safety
                  </a>
                </li>
                <li className="nav-item ml-2">
                  <a className="nav-link text-light" href="">
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="small col-2">
            <ul className="navbar-nav">
              <li className="nav-item ml-3">
                <div className="mt-1">
                  <img
                    src="./globe.png"
                    className="d-inline-block mr-1"
                    height="16px"
                  />
                  <a className="text-light" href="">
                    EN
                  </a>
                </div>
              </li>

              <li className="nav-item ml-3">
                <div className="mt-1">
                  <img
                    src="./log-in.png"
                    className="d-inline-block mr-1"
                    height="16px"
                  />
                  <a className="text-light" href="">
                    Log in
                  </a>
                </div>
              </li>

              <li className="nav-item ml-3">
                <button className="btn btn-sm btn-light rounded-0">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
