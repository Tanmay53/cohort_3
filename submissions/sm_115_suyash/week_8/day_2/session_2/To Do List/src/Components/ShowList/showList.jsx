import React from "react";

const ShowList = props => {
  return (
    <p>
      {props.num}.
      <input type="checkbox" onClick={props.click} />
      {props.item}
    </p>
  );
};

export default ShowList;
