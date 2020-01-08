import React from "react";

function GiveFocus(props) {
  return (
    <div className="col-3 mt-5 pt-3 ml-5 pb-3">
      <h5>{props.head}</h5>
      <p>{props.para}</p>
    </div>
  );
}

export default GiveFocus;
