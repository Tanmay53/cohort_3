import React, { Component } from "react";
import { fetchData, toggleLogin, reset } from "../../redux/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      url: "http://localhost:5000/auth/login",
      data: {
        email: this.state.email,
        password: this.state.password
      }
    };
    this.props.fetchData(config);
    if (this.props.data)
      if (this.props.data.error) alert("error");
      else {
        this.props.toggleLogin();
        alert("success login.");
        this.props.history.push("/");
      }

    // reset state
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    // if (this.props.isLoggedin) return <Redirect to="/" />;
    return (
      <div>
        <h1>Login Page</h1>
        <form
          onSubmit={this.handleSubmit}
          className="form-group mt-2 p-2 bg-light w-50 m-auto text-left"
        >
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
          <button type="submit" className="btn btn-primary btn-block p-2">
            Login
          </button>
        </form>
        <Link to="/auth/signup">Register New User</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedin: state.isLoggedin,
    data: state.data,
    status: state.status
  };
};

const mapDispatchToProps = { fetchData, toggleLogin, reset };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
