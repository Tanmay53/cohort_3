/** @format */

import React, { Component } from "react";
class DisplayCompletedTodo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="border border-light">
        {this.props.completedTodo.map(ele => {
          return (
            <div className="text-light h1 row justify-content-center p-2">
              <div className="col-3">
                <span
                  style={{ color: "black", textDecoration: "line-through" }}
                >
                  <span style={{ color: "white" }}>{ele}</span>
                </span>
              </div>
              <div className="col-5">
                <button
                  className="btn btn-warning"
                  value={ele}
                  onClick={() => this.props.deleteTodo(ele)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayCompletedTodo;
