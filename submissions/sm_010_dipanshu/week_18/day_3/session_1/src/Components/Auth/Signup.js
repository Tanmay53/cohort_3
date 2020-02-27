import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../Redux/Action";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSignup = event => {
    event.preventDefault();
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.password !== ""
    ) {
      this.props.signupUser(this.state);

      this.setState({
        name: "",
        email: "",
        password: ""
      });
    } else {
      alert("Please fill all fields");
    }
  };

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/Details" />;
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
              value={this.state.name}
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
              value={this.state.email}
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
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="row d-flex justify-content-between">
            <div className="text-center mt-3 ml-3">
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.handleSignup}
              >
                Signup
              </button>
            </div>
            <div className="text-center mt-3 mr-3">
              <Link to="/">
                <button type="submit" className="btn btn-danger">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </form>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    signupError: state.signupError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signupUser: state => {
      dispatch(signup(state));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
