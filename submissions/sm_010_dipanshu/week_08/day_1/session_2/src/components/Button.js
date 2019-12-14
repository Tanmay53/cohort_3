import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.label,
      color: props.color
    };
  }
  render() {
    return (
      <div className="col-2">
        <button
          className="btn btn-block badge-pill"
          style={{ background: this.state.color }}
        >
          {this.state.label}
        </button>
      </div>
    );
  }
}

export default Button;
