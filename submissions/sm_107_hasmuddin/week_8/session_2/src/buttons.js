import React from "react";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: null,
      label: null
    };
  }
  createBtn(color, label) {
    return <button className={color}>{label}</button>;
  }
  render() {
    return (
      <table>
        <tr>
          <td>{this.createBtn("blue", "JOIN US")}</td>
          <td>{this.createBtn("lightblue", "SETTINGS")}</td>
        </tr>
        <tr>
          <td>{this.createBtn("yellow", "LOGIN")}</td>
          <td>{this.createBtn("red", "CONTACT US")}</td>
        </tr>
        <tr>
          <td>{this.createBtn("green", "SEARCH")}</td>
          <td>{this.createBtn("blue", "HELP")}</td>
        </tr>
        <tr>
          <td>{this.createBtn("red", "HOME")}</td>
          <td>{this.createBtn("yellow", "DOWNLOADS")}</td>
        </tr>
      </table>
    );
  }
}

export default Buttons;
