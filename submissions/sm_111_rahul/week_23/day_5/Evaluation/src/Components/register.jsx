/** @format */

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { registerAdmin } from "../Redux/Authentication/authActions";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      mobile: "",
      nameError: "",
      emailError: "",
      usernameError: "",
      passwordError: "",
      mobileError: ""
    };
  }

  validate = () => {
    let usernameError, nameError, passwordError, mobileError, emailError;
    const { username, name, email, mobile, password } = this.state;
    if (!name) {
      nameError = "Name can't be blank";
    }
    if (!username) {
      usernameError = "Username can't be blank";
    }
    if (!email.includes("@")) {
      emailError = "Invalid email";
    }
    if (password.length < 6) {
      passwordError = "Password must be atleast of 6 characters";
    }
    if (mobile.length !== 10) {
      mobileError = "It must contain 10 digits";
    }
    if (
      nameError ||
      usernameError ||
      emailError ||
      passwordError ||
      mobileError
    ) {
      this.setState({
        nameError,
        usernameError,
        emailError,
        passwordError,
        mobileError
      });
      return false;
    }
    return true;
  };

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
    let isValid = this.validate();
    if (isValid) {
      const { registerAdmin } = this.props;

      await registerAdmin({
        username,
        name,
        mobile,
        email,
        password
      });
      const { error } = this.props;
      console.log(error);
      if (error) {
        swal({
          title: "Registeration Failed , May be already registered!",
          icon: "warning"
        });
      } else {
        swal({
          title: "Registeration Successful!",
          icon: "success"
        });
      }
    }
  };

  render() {
    const {
      usernameError,
      nameError,
      emailError,
      mobileError,
      passwordError
    } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-9 col-md-6 col-lg-5 my-2">
            <div className="h1 text-center">REGISTRATION</div>
            <div className="form-group">
              <label htmlFor="pass">Name</label>
              <input
                className="form-control"
                id="name"
                type="name"
                name="name"
                placeholder="Enter Your Name"
                onChange={this.handleChange}
              />
              <div style={{ color: "red" }}>{nameError}</div>
            </div>
            <div className="form-group">
              <label className="" htmlFor="username">
                Enter Username
              </label>
              <input
                className="form-control"
                id="username"
                name="username"
                type="text"
                placeholder="Enter username"
                onChange={this.handleChange}
              />
              <div style={{ color: "red" }}>{usernameError}</div>
            </div>
            <div className="form-group">
              <label className="" htmlFor="email">
                Email id
              </label>
              <input
                className="form-control"
                id="email"
                name="email"
                placeholder="abc@gmail.com"
                type="text"
                onChange={this.handleChange}
              />
              <div style={{ color: "red" }}>{emailError}</div>
            </div>

            <div className="form-group">
              <label className="" htmlFor="pass">
                Password
              </label>
              <input
                className="form-control"
                id="pass"
                type="password"
                placeholder="trisha123"
                name="password"
                onChange={this.handleChange}
              />
              <div style={{ color: "red" }}>{passwordError}</div>
            </div>

            <div className="form-group">
              <label className="" htmlFor="pass">
                Mobile
              </label>
              <input
                className="form-control"
                id="mobile"
                type="mobile"
                name="mobile"
                placeholder="98XXXXXX88"
                onChange={this.handleChange}
              />
              <div style={{ color: "red" }}>{mobileError}</div>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.signUp}
            >
              Register
            </button>
            <Link to="/login" className="btn btn-success float-right">
              Already have account?
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.authReducer.isAuth,
    error: state.authReducer.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    registerAdmin: payload => dispatch(registerAdmin(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
