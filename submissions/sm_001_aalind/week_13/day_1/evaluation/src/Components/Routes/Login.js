import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  changeHandler = event => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  submitHandler = event => {
    if (this.state.username === "admin" && this.state.password === "admin") {
      localStorage.setItem("isAuthenticated", true);
      this.props.history.push("/dashboard");
    } else {
      alert("Invalid Credentials!");
    }

    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Login" />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
