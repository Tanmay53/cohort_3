import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      adminUsername: "admin",
      adminPassword: "password",
      login: false
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = () => {
    var { username, password, adminUsername, adminPassword } = this.state;
    if (username == adminUsername && password == adminPassword) {
      this.setState({
        login: true
      });
    }
  };
  render() {
    return (
      <div className="d-flex justify-content-center p-5">
        <form className="text-center col-8 col-md-8 col-lg-4 bg-light shadow p-5">
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
            placeholder="Username"
            className="form-control m-3"
          />
          <input
            type="pasword"
            placeholder="Password"
            onChange={this.handleChange}
            name="password"
            className="form-control m-3"
            value={this.state.password}
          />
          <input
            onClick={this.handleClick}
            type="submit"
            className="btn btn-info"
          />
        </form>
      </div>
    );
  }
}

export default Login;
