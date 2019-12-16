import React, { Component } from "react";
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      toggle: false
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submit = () => {
    if (
      this.state.username == this.props.data.username &&
      this.state.password == this.props.data.password
    ) {
      this.setState({
        toggle: true
      });
    } else {
      alert("Username or password is Wrong!!");
    }
  };

  render() {
    if (this.state.toggle) {
      return (
        <div>
          <h2>SIGN-IN SUCESSFUL</h2>
        </div>
      );
    }
    return (
      <div>
        <div>
          <div>
            <h3>Sign in</h3>
            <label htmlFor="username" className="m-2">
              Username
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="username"
              className="m-2 form-control"
            />
            <label htmlFor="password" className="m-2">
              Password
            </label>
            <input
              type="text"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              className="m-2 form-control"
            />
            <input
              type="submit"
              onClick={this.submit}
              className="m-2 btn btn-success"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
