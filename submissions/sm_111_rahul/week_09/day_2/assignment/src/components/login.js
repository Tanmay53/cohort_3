/** @format */

import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
 
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username :'',
            password :''
        };
      }
      handleChange = e =>{
        const {name, value} = e.target;
         this.setState({
            [name] : value 
         }) 
    }
      submitData = e =>{
      e.preventDefault();
      let user = this.state.username;
      let pass = this.state.password;
      console.log(user,pass)
      this.props.auth(user,pass);
      // console.log('rahul')
      // console.log(this.props)
    }
      
 
  render() {
    console.log(this.props)
    if(this.props.isAuth == true){
      return <Redirect to="/cart"></Redirect>
    }
    return (
      <div style={{ padding: 50 }} className="container">
      <div className="row justify-content-center  p-3">
      <div className="col-12 col-md-8 col-lg-6 ">
        <h1 className="display-4 text-center text-danger">Login To Explore</h1>
        <br />
        <form
          onSubmit={this.submitData}
          className=" h1 "
        >
          <div
            className="bg-dark  p-3 text-light"
            style={{ borderRadius: "10px" }}
          >
            <div className="form-group">
              <label htmlFor="userN">Username</label>
              <input
                id="userN"
                name="username"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pass">Password</label>
              <input
                id="pass"
                name="password"
                className="form-control"
                onChange={this.handleChange}
              />
             
            </div>
            <div className="row float-right">
            <button type="submit" className="btn-lg btn-danger float-right">
              Sign In
            </button>
            </div>
           
          </div>
        </form>
        </div>
        </div>
      </div>
    );
  }
}

export default Login;
