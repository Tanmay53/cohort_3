import React, { Component } from "react";

export class Completed extends Component {
  render() {
    return (
      <div>
        <h2>Completed</h2>
        {this.props.data.map(function(item, index) {
          return (
            <div
              style={{ display: "flex" }}
              className="border border-dark"
              key={item.name + index}
            >
              <strike className="mr-5">
                <div>
                  <h3>{item.name}</h3>
                </div>
              </strike>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Completed;
