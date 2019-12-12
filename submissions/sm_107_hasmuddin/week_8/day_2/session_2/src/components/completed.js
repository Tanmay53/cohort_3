import React from "react";

class Completed extends React.Component {
  render() {
    return (
      <div>
        <h4 className="border w-100 bg-dark text-white">Completed</h4>
        <div className="d-flex my-2 p-1">
          <input
            type="checkbox"
            disabled="disabled"
            checked="checked"
            className="p-3"
          />
          <div className="bg-white px-5 todolist">
            <strike key={this.props.complete}>{this.props.complete}</strike>
          </div>
        </div>
      </div>
    );
  }
}
export default Completed;
