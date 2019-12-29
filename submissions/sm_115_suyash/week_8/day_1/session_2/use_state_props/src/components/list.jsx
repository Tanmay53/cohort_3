import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oprH3: "Mobile Operating System",
      arrOprSys: ["Andriod", "Blackberry", "iPhone", "Window Phone"],
      manfH3: "Mobile Manufactiors",
      arrManf: ["Samsung", "HTC", "Micromax", "Appel"]
    };
  }
  render() {
    return (
      <div>
        <h3 className="py-3 pl-3">{this.state.oprH3}</h3>
        <ul>
          {this.state.arrOprSys.map(item => (
            <li>{item}</li>
          ))}
        </ul>
        <h3 className="py-2 pl-3">{this.state.manfH3}</h3>
        <ul>
          {this.state.arrManf.map(val => (
            <li>{val}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
