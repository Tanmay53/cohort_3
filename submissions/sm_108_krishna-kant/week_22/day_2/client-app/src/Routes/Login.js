import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../redux/actions/auth";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { login } = this.props;
    let data = { ...this.state };

    login(data);
    console.log(data);

    // Reset Form
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      email: "",
      password: ""
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.loading !== this.props.loading) {
      if (this.props.isAuth) {
        this.props.history.push("/");
      }
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="container">
        <div className="row p-5">
          <div className="col-lg-4 col-md-8 col-sm-12 offset-lg-4 card py-4 text-left">
            <form className="mx-auto" onSubmit={this.handleSubmit}>
              <h3>Login to Twitter</h3>
              <div className="form-group">
                <label> Email</label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  required
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="form-group">
                <label> Password</label>
                <input
                  type="password"
                  placeholder="Enter Email Password"
                  required
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary btn-block"
                ></input>
              </div>
              {this.props.loading ? (
                <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : null}
              {this.props.isError ? (
                <div className="alert alert-danger" role="alert">
                  {this.props.error}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isError: state.auth.isError,
  loading: state.auth.loading,
  error: state.auth.error,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);
