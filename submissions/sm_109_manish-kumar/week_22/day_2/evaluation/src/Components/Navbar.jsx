import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-dark">
          <Link to ="/" className="btn btn-primary">HOME</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="mx-4 nav-item active">
                <Link to="/add-job" className="btn btn-primary">
                  ADD JOB
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  );
}

export default Navbar
