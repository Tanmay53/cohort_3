import React, { Component } from "react";

export class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: ""
    };
  }
  render() {
    return (
      <div>
        <input
          onChange={e => {
            this.setState({
              itemName: e.target.value
            });
          }}
          type="text"
          value={this.state.itemName}
        />
        <button onClick={() => this.props.add(this.state.itemName)}>Add</button>
      </div>
    );
  }
}

export default Add;
