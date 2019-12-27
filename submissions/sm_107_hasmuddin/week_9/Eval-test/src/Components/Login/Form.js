import React, { Component } from "react";
import Login from "./Login";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "hasmuddin",
      password: "12345"
    };
  }

  render() {
    return (
      <div className="col-4 m-5 border">
        <Login data={this.state} />
      </div>
    );
  }
}

export default Form;
