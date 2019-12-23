import React from "react";

const SiteName = props => {
  return (
    <span className="navbar-brand" style={{ listStyle: "none" }}>
      {props.children}
    </span>
  );
};

export default SiteName;
