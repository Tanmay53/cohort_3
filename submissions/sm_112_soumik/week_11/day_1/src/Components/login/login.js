import React from "react";
import Form from "./form";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginName: "Soumik",
      loginPass: "12345"
    };
  }

  submitForm = e => {
    if (
      this.state.loginName == this.state.inputName &&
      this.state.loginPass == this.state.inputPass
    ) {
      alert("Login Succesfull");
    } else {
      alert("Try again");
    }
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Form name={this.state.loginName} pass={this.state.loginPass} />
      </div>
    );
  }
}

export default Login;
