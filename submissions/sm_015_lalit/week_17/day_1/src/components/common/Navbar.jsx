import React from "react";
import { Link } from "react-router-dom";
export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar sticky-top shadow-lg navbar-expand-lg navbar-light bg-light  ">
        <Link className="ml-3 navbar-brand" to="/">
         Home
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse " id="navbarSupportedContent">
          <span className="text-muted">Book meeting rooms</span>
        </div>
      </nav>
    );
  }
}
