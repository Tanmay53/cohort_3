/** @format */
import React, { Component } from "react";
import Auth from "../auth/auth.js";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      adminUser: "admin",
      adminPass: "admin"
    };
  }

  handleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
  };

  handleSubmit = (e) =>{

      e.preventDefault();
      const {userName,password,adminPass,adminUser} = this.state;
      if (userName == adminUser && password == adminPass){
            Auth.login(() => {
                alert("Successfully Logged In")
                this.props.history.push("/")
            });
      }
      else{
          alert("Invalid Password / UserName")
      }
  }

  render() {
    return (
      <div className="container bg-light col-sm-8 col-md-6 col-lg-4">
        <div className="form-group">
          <label>UserName</label>
          <input
            type="text"
            className="form-control my-3"
            placeholder="admin"
            name="userName"
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            className="form-control my-3"
            placeholder="admin"
            name="password"
            onChange={this.handleChange}
          ></input>
        
        </div>
        <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Login
          </button>
      </div>
    );
  }
}

export default Login;
