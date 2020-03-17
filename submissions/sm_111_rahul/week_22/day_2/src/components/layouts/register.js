/** @format */

import React from "react";
import { connect } from "react-redux";
import { registerAdmin } from "../redux/action/authActions";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      mobile: ""
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

  signUp = async () => {
    const { username, name, email, password, mobile } = this.state;
    const { registerAdmin, isAuth } = this.props;
    await registerAdmin({ username, name, mobile, email, password });
    if (isAuth) {
      this.props.history.push("/home");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div>
              <div className="h1 text-center">REGISTRATION</div>
            </div>
            <div className="my-4">
              <label className="ml-2" htmlFor="pass">
                Name
                <input
                  className="form-control"
                  id="name"
                  type="name"
                  name="name"
                  onChange={this.handleChange}
                  style={{ width: "360px" }}
                />
              </label>
            </div>
            <div className="my-4">
              <label className="ml-2" htmlFor="username">
                Enter Username
                <input
                  className="form-control"
                  id="username"
                  name="username"
                  type="text"
                  onChange={this.handleChange}
                  style={{ width: "360px" }}
                />
              </label>
            </div>
            <div className="my-4">
              <label className="ml-2" htmlFor="email">
                Email id
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  type="text"
                  onChange={this.handleChange}
                  style={{ width: "360px" }}
                />
              </label>
            </div>

            <div className="my-4">
              <label className="ml-2" htmlFor="pass">
                Password
                <input
                  className="form-control"
                  id="pass"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  style={{ width: "360px" }}
                />
              </label>
            </div>

            <div className="my-4">
              <label className="ml-2" htmlFor="pass">
                Mobile
                <input
                  className="form-control"
                  id="mobile"
                  type="mobile"
                  name="mobile"
                  onChange={this.handleChange}
                  style={{ width: "360px" }}
                />
              </label>
            </div>
            <div className="text-center py-1">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.signUp}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.authReducer.isAuth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    registerAdmin: payload => dispatch(registerAdmin(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
