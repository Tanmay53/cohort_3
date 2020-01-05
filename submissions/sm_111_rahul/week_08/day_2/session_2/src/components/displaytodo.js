/** @format */

import React, { Component } from "react";
class DisplayTodo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="border border-light">
        {this.props.data.map(ele => {
          return (
            <div className="text-light h2 row justify-content-center p-2">
              <div className="col-3">{ele}</div>
              <div className="col-5">
                <button
                  className="btn btn-success"
                  value={ele}
                  onClick={() => this.props.todoFn(ele)}
                >
                  Click if completed
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayTodo;
