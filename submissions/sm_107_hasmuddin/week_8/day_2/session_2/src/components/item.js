import React from "react";

class Item extends React.Component {
  removeData = e => {
    e.target.parentElement.remove();
  };
  constructor(props) {
    super(props);
    this.completed = ["Done"];
    this.state = {};
  }

  handlerCheck = e => {
    if (e.target.checked == true) {
    }
  };
  render() {
    return (
      <div className="d-flex my-2 p-1">
        <input type="checkbox" onClick={this.handlerCheck} className="p-3" />
        <div className="bg-white px-5 todolist" key={this.props.activity}>
          {this.props.activity}
        </div>
        <button
          className="bg-danger text-white px-3 border"
          onClick={this.removeData}
        >
          X
        </button>
      </div>
    );
  }
}
export default Item;
