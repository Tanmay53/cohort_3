import React, { Component } from "react";
import { connect } from "react-redux";
import { loginDetail } from "../Redux/Action";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        username: "",
        password: "",
        isLoggedIn:false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    const data = {
      "password" : this.state.password,
      "username" : this.state.username
    }
    axios.post("http://localhost:8080/auth/login", data)
    .then(res => {
      if(res.status === 200){
        this.setState({
          isLoggedIn:true
        })
        this.props.history.push("/home")
      }
    })
    .catch(err => {
      console.log(err);
    })
    const { sendUserDetail } = this.props;
    sendUserDetail(this.state.isLoggedIn);
  };

  register = () => {
    this.props.history.push("/register")
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-3" />
          <div
            className="col-6 mt-3 shadow p-3 mb-5 bg-black rounded"
            style={{ border: "1px solid black" }}
          >
            <center>
              <h3 className="m-2" style={{ fontFamily: "Herculanum" }}>
                Login Details
              </h3>
            </center>
            <hr />
            <form>
              <center>
                <label className="m-2">
                  USERNAME
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                    className="form-control m-2"
                  />
                </label>
              </center>

              <center>
                <label className="m-2">
                  PASSWORD
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    className="form-control m-2"
                  />
                </label>
              </center>
              <center>
                <input
                  type="submit"
                  onClick={this.handleClick}
                  className="m-2 mb-3 btn btn-success"
                />
              </center>
              <center>
                <button
                  type="submit"
                  onClick={this.register}
                  className="m-2 mb-3 btn btn-success"
                >Register</button>
              </center>
            </form>
          </div>
          <div className="col-3" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendUserDetail: details =>
    dispatch(loginDetail(details))
});

export default connect(null, mapDispatchToProps)(Login);

