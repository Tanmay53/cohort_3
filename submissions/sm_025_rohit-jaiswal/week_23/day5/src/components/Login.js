import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Head from "./Head";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      entered: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/auth/login", this.state)
      .then(res => {
        if (res) {
          if (res.data.error === false) {
            alert("Success,You are In");
            this.setState({
              entered: true
            });
          }
        }
      })
      .catch(error => console.log(error));
  };
  render() {
    if (this.state.entered) {
      return <Redirect push to="/displayform" />;
    }
    return (
      <React.Fragment>
        <Head />
        <div className="container">
          <h1 className="text-center text-success font-weight-bold">
            Login Here
          </h1>
          <div className="row text-center justify-content-center">
            <div className="col-6 mt-4">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label className="h5">Enter UserName</label>
                  <input
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="h5">Enter Password</label>
                  <input
                    type="Password"
                    name="password"
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
                <div className="text-center">
                  <button className="btn btn-success mt-3">
                    Enter To Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Login;
