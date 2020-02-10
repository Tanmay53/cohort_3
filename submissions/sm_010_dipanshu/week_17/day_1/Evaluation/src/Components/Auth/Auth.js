import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { LoginUser } from "../../Redux/Action";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.login(this.state);
    }
  };

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/home" />;
    } else {
      return (
        <form className="col-4 mx-auto mt-5 shadow shadow-lg p-5 border border-dark">
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
          <div className="d-flex justify-content-between">
            <button
              type="submit"
              className="btn btn-success"
              onClick={this.handleLogin}
            >
              Login
            </button>
            <Link to="/signup">
              <button type="submit" className="btn btn-danger">
                Signup
              </button>
            </Link>
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
    login: state => {
      dispatch(LoginUser(state));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
