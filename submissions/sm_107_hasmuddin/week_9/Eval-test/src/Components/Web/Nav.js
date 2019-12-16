import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="nav bg-dark p-3  .d-sm-none .d-lg-block .d-md-none">
        <div className="nav-item mx-3 text-white">
          <h3>UBER</h3>
        </div>

        <div className="nav-item mx-3 text-white">Product</div>
        <div className="nav-item mx-3 text-white">Company</div>
        <div className="nav-item mx-3 mr-5 text-white">Safety</div>
        <div className="nav-item mx-5 text-white">Help</div>
        <div className="nav-item mx-3 text-white">EN</div>
        <div className="nav-item mx-3 text-white">Log in</div>
        <div className="nav-item mx-3 text-dark bg-white p-2">Sign up</div>
      </nav>
    </div>
  );
};

export default Nav;
