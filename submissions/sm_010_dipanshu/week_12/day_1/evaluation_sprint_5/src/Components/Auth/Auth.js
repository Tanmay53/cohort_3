import React from "react";
import { AUTH_ACTION } from "../../Redux/Action";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

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

  handleSubmit = event => {
    event.preventDefault();
    this.props.authenticate(this.state.username, this.state.password);
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/dashboard" />;
    } else {
      return (
        <div className="container mt-5 p-4 border border-dark shadow shadow-lg rounded  ">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                aria-describedby="emailHelp"
                placeholder="masai"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="school"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authenticate: (username, password) => {
      dispatch(AUTH_ACTION(username, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
