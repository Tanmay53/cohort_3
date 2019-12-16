import React from "react";

const Todo = props => {
  return (
    <div>
      <h2> {props.lable}</h2>
      {props.data.map(function(item, index) {
        return (
          <div
            className="todo my-1"
            style={{ display: "flex" }}
            key={item.name + index}
          >
            <button
              className="btn btn-success w-10"
              onClick={() => {
                props.toggle(index);
              }}
            >
              C
            </button>
            <div>
              <h3 className="mx-5">{item.name}</h3>
            </div>
            <button
              className="btn btn-danger w-10"
              onClick={() => {
                props.delete(index);
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
