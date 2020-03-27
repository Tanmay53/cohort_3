import React, { Component } from 'react';
import {connect} from "react-redux";
  import  {loginUser} from "../redux/action"

class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username:"",
       password:""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleClick = (e) => {
    e.preventDefault();
    const {sendloginDetail} = this.props
    sendloginDetail(this.state)
  }

  login = (e) => {
    e.preventDefault()
    this.props.history.push("/login")
  }
  render() {
    return (
      <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-6 mt-3 shadow p-3 mb-5 bg-black rounded" style={{ border: "1px solid black" }}>
          <form className="needs-validation m-3" id="lform" noValidate ref={form => this.form = form}>
            <center><h2>Login</h2></center>
            <div className="form-group">
              <label htmlFor="uname">Username:</label>
              <input type="text" className="form-control" id="uname" placeholder="Enter username" onChange={this.handleChange} name="username" value={this.state.username} required />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">Please fill out this field.</div>
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd" placeholder="Enter password" onChange={this.handleChange} value={this.state.password} name="password" required />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">Please fill out this field.</div>
            </div>
            <input
                type="submit"
                onClick={this.handleClick}
                className="m-2 mb-3 btn btn-primary"
              />
              <button
                type="submit"
                onClick={this.login}
                className="m-2 mb-3 btn btn-primary"
              >Go To Register</button>
          </form>
        </div>
      </div>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendloginDetail:payload => dispatch(loginUser(payload))
})


export default connect(null, mapDispatchToProps) (Login)