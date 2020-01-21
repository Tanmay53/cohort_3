import React from "react";

function Navbar(props) {
  return (
    <>
      <div className="bg-info py-3">{props.children}</div>
    </>
  );
}

export default Navbar;
