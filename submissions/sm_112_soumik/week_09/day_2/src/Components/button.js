import React, { Component } from "react";
import axios from "axios";

export default class extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      comics: []
    };
  }

  render() {
    return <div>Axios Async Await</div>;
  }
}
