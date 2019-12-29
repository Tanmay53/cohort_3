import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import fetchPostRequest from "../redux/Action";
import fetchSuccess from "../redux/Action";

var stateData;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      toggle: false,
      token: ""
    };
  }

  // change input
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // login button
  handleClick = async () => {
    await this.checkToken();
    await this.login();
  };

  // token check if true or false
  checkToken = async () => {
    let { fetchPostRequest, data } = this.props;
    let url = "/auth/login";
    let method = "post";
    let requestData = {
      password: this.state.password,
      username: this.state.username
    };
    await fetchPostRequest(url, method, requestData);
  };

  // fetching user info by user token ;

  login = async () => {
    let { fetchPostRequest, data, state } = this.props;
    if (data.token == undefined || data.token == "") {
      alert("Wrong username or password");
      this.props.fetchSuccess("");
      console.log("after change state", this.props.state);
    } else if (
      this.props.state.error == "Request failed with status code 401"
    ) {
      fetchPostRequest(null);
      alert(this.props.state.error);
    } else {
      this.setState({
        toggle: true
      });
      let url = `/user/${this.state.username}`;
      let method = "get";
      let token = data.token;
      let headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      };
      await fetchPostRequest(url, method, false, headers);

      // debugging
      console.log("User data", this.props.data, "toggle", this.state.toggle);
      console.log("before change state", this.state);
      console.log("after change state", this.props.state);
    }
  };

  render() {
    // if toggle true then it will send to dashbord
    if (this.state.toggle) {
      this.setState({
        toggle: false
      });
      return <Redirect to="/dashboard" />;
    }

    // login form
    return (
      <div className="container d-flex justify-content-center flex-column text-white">
        <div className="container col-lg-6 border bg-dark py-4 text-white">
          <h4>Login </h4>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Username"
            name="username"
            className="form-control  my-2"
          />
          <input
            type="password"
            onChange={this.handleChange}
            placeholder="Password"
            name="password"
            className="form-control  my-2"
          />
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <input
                    onClick={() => this.handleClick()}
                    type="button"
                    value="Login"
                    className="btn btn-info"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="text-white">
                  Create an account. <Link to="/">Signup</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    data: state.data,
    token: state.data.token,
    isLoading: state.isLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchPostRequest: (url, method, data, headers) =>
      dispatch(fetchPostRequest(url, method, data, headers)),
    fetchSuccess: data => dispatch(fetchSuccess(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
