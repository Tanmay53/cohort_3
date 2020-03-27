import React, { Component } from "react";
import { connect } from "react-redux";
import { singUpReq } from "../../redux/loginAction";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    let obj = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      password: this.state.password
    };
    this.props.singUpReq(obj);
    this.setState({
      name: "",
      email: "",
      password: ""
    });
  };
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="mx-auto">
          <h1>Sign Up</h1>
          <div>
            <input
              placeholder="Enter Your Name"
              className="mt-2"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div>
            <input
              placeholder="Enter Your Email"
              className="mt-2"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div>
            <input
              placeholder="Enter Your Password"
              className="mt-2"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <button
            type="primary"
            loading={this.state.loading}
            onClick={this.handleSubmit}
            className="ml-3 mt-2 px-3 py-2 text-white btn-dark"
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuth: state.isAuth,
  signUpMsg: state.signUpMsg
});

const mapDispatchToProps = {
  singUpReq: payload => singUpReq(payload)
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
