import React from "react";
import { Link } from "react-router-dom";

function NavChildLink(props) {
  return (
    <>
      <Link className="px-2 mx-3 text-white" to={props.pth}>
        {props.label}
      </Link>
    </>
  );
}

export default NavChildLink;
