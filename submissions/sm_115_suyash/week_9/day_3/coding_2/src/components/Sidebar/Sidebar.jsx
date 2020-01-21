import React from "react";

function Sidebar(props) {
  return (
    <div className="shadow py-5 pl-4 ml-5 mt-3" style={{ width: "20vw" }}>
      {props.children}
    </div>
  );
}

export default Sidebar;
