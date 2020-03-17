import React, { Component } from "react";
import { fetchAuthData, authReset } from "../../redux/auth/auth_action";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    //   api call
    const config = {
      method: "POST",
      url: "http://localhost:5000/signup",
      data: {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        isAdmin: false
      }
    };
    this.props.fetchAuthData(config);
    // reset state
    this.setState({
      username: "",
      email: "",
      password: "",
      isAdmin: false
    });
  };
  toggleAdmin = () => {
    this.setState({
      isAdmin: !this.state.isAdmin
    });
  };
  render() {
    if (this.props.data.error === false) {
      alert(this.props.data.message);
      this.props.authReset();
      return <Redirect to="/login" />;
    } else if (this.props.data.error) {
      alert(this.props.data.message);
      this.props.authReset();
    }
    return (
      <div>
        <h2>Signup Page</h2>
        <form
          onSubmit={this.handleSubmit}
          className="form-group mt-2 p-2 bg-light w-50 m-auto text-left"
        >
          <label htmlFor="username">Userame</label>
          <input
            type="text"
            name="username"
            className="form-control mb-1"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control mb-1"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control mb-1"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <label htmlFor="is_admin" className="form-control">
            Admin
            <input
              type="checkbox"
              name="isAdmin"
              className="form-control text-center"
              value="true"
              onChange={this.toggleAdmin}
            />
          </label>
          <button type="submit" className="btn btn-primary btn-block p-2">
            Signup
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedin: state.auth_reducer.isLoggedin,
    data: state.auth_reducer.data,
    status: state.auth_reducer.status
  };
};

const mapDispath = { fetchAuthData, authReset };
export default connect(mapStateToProps, mapDispath)(Signup);
