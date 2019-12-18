import React, { Component } from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Bottom from "./Bottom";
export class Uber extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Banner />
        <Bottom />
      </div>
    );
  }
}

export default Uber;
