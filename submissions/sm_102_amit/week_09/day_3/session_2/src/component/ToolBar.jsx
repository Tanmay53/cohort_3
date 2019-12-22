import React from "react";

const ToolBar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {props.children}
    </nav>
  );
};

export default ToolBar;
