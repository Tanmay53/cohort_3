import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <img
          className="mr-5"
          alt="imgg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlixvaLonw3H4Hd8N9ALO-_HnhhCeUJ93PmETcntgXXFjkO7nS"
          style={{ height: "50px" }}
        ></img>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li>
              <Link className="text-dark ml-5 p-2 border-secondary" to="/login">
                LOGIN
              </Link>
            </li>

            <li>
              <Link
                className="text-dark ml-5 p-2 border-secondary"  to="/register" >
                REGISTER
              </Link>
            </li>

            <li>
              <Link className="text-dark ml-5 p-2 border-secondary" to="/home">
                HOME
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
