import React from "react";
import "./button.css";

const Btn = props => {
  return <button onClick={props.clicked}>Add Task</button>;
};

export default Btn;
