import React, { Component } from "react";
import { connect } from "react-redux";
import { isAuth } from "../redux/action";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      userPass: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    this.props.isAuth(this.state);
  };

  render() {
    return this.props.flag ? (
      <div className="d-flex justify-content-center">
        <h1 className="display-3 text-success mt-5">Sign In Successfully</h1>
      </div>
    ) : (
      <div>
        <div className="w-50 py-5 m-auto shadow-lg rounded">
          <p className="display-4 text-center">Login Page</p>
          <form>
            <div className="form-row my-5">
              <div className="form-group col-md-6 offset-3">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Email is 'admin'"
                  className="form-control"
                  name="userName"
                  value={this.state.userName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-6 offset-3">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password is 'admin'"
                  className="form-control"
                  name="userPass"
                  value={this.state.userPass}
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <div className="form-group col-md-6 offset-3">
                <button
                  type="submit"
                  className="btn btn-dark w-100"
                  onClick={e => this.handleClick(e)}
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  flag: state.isAuth
});

const mapDispatchToProps = dispatch => ({
  isAuth: payload => dispatch(isAuth(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
