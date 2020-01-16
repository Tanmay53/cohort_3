import React from "react";
import { Link, Route } from "react-router-dom";

function Children(props) {
  return (
    <>
      <p>
        <i className={props.icon}></i> <Link to={props.pth}>{props.label}</Link>
      </p>
      <Route path={props.pth} component={props.comp} />
    </>
  );
}

export default Children;
