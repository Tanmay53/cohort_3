import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { SignupUser } from "../../Redux/Action";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      username: "",
      password: "",
      mobile: "",
      description: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSignup = async event => {
    event.preventDefault();
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.username !== "" &&
      this.state.password !== "" &&
      this.state.mobile !== "" &&
      this.state.description !== ""
    ) {
      await this.props.signup(this.state);
      this.props.history.push("/login");
    }
  };

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/home" />;
    } else {
      return (
        <form className="col-4 mx-auto mt-3 shadow shadow-lg p-5 border border-dark">
          <div className="form-group">
            <label htmlFor="name" className="font-weight-bold">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="font-weight-bold">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username" className="font-weight-bold">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="font-weight-bold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile" className="font-weight-bold">
              Mobile
            </label>
            <input
              type="number"
              className="form-control"
              id="mobile"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="font-weight-bold">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              onChange={this.handleChange}
            />
          </div>
          <div className="text-center mt-3">
            <button
              type="submit"
              className="btn btn-success"
              onClick={this.handleSignup}
            >
              Signup
            </button>
          </div>
        </form>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    isSignedUp: state.isSignedUp
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: state => {
      dispatch(SignupUser(state));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
