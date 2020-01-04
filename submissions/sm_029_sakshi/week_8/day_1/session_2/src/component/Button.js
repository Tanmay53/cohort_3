import React from "react";

class Button extends React.Component {
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
          <td>{this.createBtn("bg-info", "JOIN US")}</td>
          <td>{this.createBtn("bg-light", "SETTINGS")}</td>
        </tr>
        <tr>
          <td>{this.createBtn("bg-warning", "LOGIN")}</td>
          <td>{this.createBtn("bg-danger", "CONTACT US")}</td>
        </tr>
        <tr>
          <td>{this.createBtn("bg-success", "SEARCH")}</td>
          <td>{this.createBtn("bg-primary", "HELP")}</td>
        </tr>
        <tr>
          <td>{this.createBtn("bg-danger", "HOME")}</td>
          <td>{this.createBtn("bg-secondary", "DOWNLOADS")}</td>
        </tr>
      </table>
    );
  }
}

export default Button
