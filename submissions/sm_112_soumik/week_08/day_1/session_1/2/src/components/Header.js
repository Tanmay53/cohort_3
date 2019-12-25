import React from "react";

function Header() {
  return (
    <div className="row">
      <div className="col-md-3">
        <span class="badge badge-warning">Pro</span>
      </div>
      <div className="col-md-6">
        <img
          id="img"
          className="img-fluid rounded-circle border"
          src="https://pixelartindia.com/static/img/home-carousel/home-c-1.jpg"
        ></img>
      </div>
    </div>
  );
}

export default Header;
