import React from "react";

const Banner = props => {
  return (
    <div className="col-sm-10 offset-sm-1 banner">
      <div className="banner-heading text-center">
        <h1 className="display-1">{props.name}</h1>
      </div>
    </div>
  );
};

export default Banner;
