/** @format */

import React, { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { 
       username :'',
       password :''
     }
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
      this.props.checkValid(user,pass);
  }

  render() {
    return (
      <div>
        <div className="container">
        <form onSubmit={this.submitData} className="border border-primary m-3 p-3 bg-warning">
          <h1>Sign In</h1>
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
          <button type="submit" className="btn-lg btn-dark">
              Submit
          </button>
          </form>
        </div>
    
      </div>
    );
  }
}

export default Form;
