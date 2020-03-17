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
      <div>
        <input
          placeholder="Enter Your Name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          placeholder="Enter Your Email"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <input
          placeholder="Enter Your Password"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
        />
        <button
          type="primary"
          loading={this.state.loading}
          onClick={this.handleSubmit}
        >
          Sign Up
        </button>
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
