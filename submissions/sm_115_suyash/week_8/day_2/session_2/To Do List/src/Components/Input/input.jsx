import React from "react";
import "./input.css";

const Input = props => {
  return (
    <input
      className="input"
      placeholder="Enter a task"
      type="text"
      onChange={props.changed}
    />
  );
};

export default Input;
