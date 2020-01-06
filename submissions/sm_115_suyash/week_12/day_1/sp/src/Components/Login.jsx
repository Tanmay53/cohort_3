import React, { Component } from "react";
import Form from "./Form";

class Login extends Component {
  render() {
    const email = "suyashmishra143143@gmail.com";
    const pass = "samMas@882";
    return (
      <div>
        <Form email={email} pass={pass} />
      </div>
    );
  }
}

export default Login;
