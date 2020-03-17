/** @format */

import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginAdmin } from "../redux/action/authActions";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => console.log(this.state)
    );
  };

  signIn = async () => {
    const { username, password } = this.state;
    const { signInAdmin } = this.props;
    await signInAdmin({ username, password });
  };

  render() {
    const { isAuth } = this.props;
    if (isAuth === true) {
      return <Redirect to="/home" />;
    }

    return (
      <div className="container">
        <div className="text-center my-3">
          <div className="h1">SIGN IN</div>
        </div>

        <div className=" py-2">
          <div className="my-2 text-center">
            <label className="ml-2 text-left" htmlFor="username">
              Username
              <input
                className="form-control"
                id="username"
                name="username"
                type="username"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="my-2 text-center">
            <label className="ml-2 text-left" htmlFor="password">
              Password
              <input
                className="form-control"
                id="password"
                name="password"
                type="password"
                onChange={this.handleChange}
              />
            </label>
          </div>
        </div>
        <div className="text-center py-2">
          <button type="button" className="btn btn-primary" onClick={this.signIn}>
            Log in
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signInAdmin: payload => dispatch(loginAdmin(payload))
  };
};

const mapStateToProps = state => {
  return {
    isAuth: state.authReducer.isAuth
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
