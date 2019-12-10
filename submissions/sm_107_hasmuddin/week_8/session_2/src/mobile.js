import React from "react";

class Mobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      os: ["Android", "Blackberry", "iPhone", "Windows Phone"],
      manuf: ["Samsung", "HTC", "Micromax", "Apple"]
    };
  }
  list(arr) {
    let data = arr.map(function(items) {
      return <li>{items}</li>;
    });
    return data;
  }

  render() {
    return (
      <div>
        <h1>Mobile Operating System</h1>
        <ul>{this.list(this.state.os)}</ul>
        <h1>Mobile Manufacturers</h1>
        <ul>{this.list(this.state.manuf)}</ul>
      </div>
    );
  }
}

export default Mobile;
