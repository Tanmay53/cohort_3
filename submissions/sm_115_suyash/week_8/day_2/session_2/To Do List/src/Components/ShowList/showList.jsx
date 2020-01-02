import React from "react";
import "./showList.css";

const ShowList = props => {
  return (
    <p className="para">
      {props.num}.
      <input type="checkbox" onClick={props.click} />
      {props.item}
    </p>
  );
};

export default ShowList;
