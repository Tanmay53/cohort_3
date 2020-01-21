import React from "react";

function TodoInput(props) {
  return (
    <>
      <h1>To-Do List</h1>
      <input type="text" onChange={props.change} />
      <button onClick={props.click}>Add</button>
    </>
  );
}

export default TodoInput;
