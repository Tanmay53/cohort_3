import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { singInReq } from "../../redux/loginAction";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    const { singInReq } = this.props;
    this.setState({ loading: true });
    let obj = {
      email: this.state.email,
      password: this.state.password
    };
    if (obj.email != "" && obj.password != "") {
      singInReq(obj);
      this.setState({
        email: "",
        password: ""
      });
    }
  };
  render() {
    return (
      <div>
        <input
          placeholder="Enter Your Email"
          value={this.state.email}
          onChange={this.handleChange}
          name="email"
        />
        <input
          placeholder="Enter Your Password"
          value={this.state.password}
          onChange={this.handleChange}
          name="password"
        />
        <button
          type="primary"
          loading={this.state.loading}
          onClick={this.handleSubmit}
        >
          Sign In
        </button>
        <p>
          Don't have acccount <Link to="/signup">Sing Up</Link> from here
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  signInMsg: state.signInMsg
});

const mapDispatchToProps = {
  singInReq: payload => singInReq(payload)
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
