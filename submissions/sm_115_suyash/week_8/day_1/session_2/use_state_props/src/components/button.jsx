import React from "react";

function Btn(props) {
  return (
    <div>
      <button className={props.classItem}>{props.text}</button>
    </div>
  );
}
export default Btn;
