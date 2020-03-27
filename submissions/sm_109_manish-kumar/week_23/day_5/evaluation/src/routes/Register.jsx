import React, { Component } from 'react'
import {connect} from "react-redux";
import {registerUser} from "../redux/action"

class Register extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"",
       email:"",
       password:"",
       username:"",
       mobile:"",
    }
  }
  handleChange = (e) => {

    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleClick = (e) => {
    e.preventDefault();
    const {sendRegisterDetail} = this.props;
    sendRegisterDetail(this.state)
  }

  register = (e) => {
    e.preventDefault()
    this.props.history.push("/")
  }
  
  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-6 mt-3 shadow p-3 mb-5 bg-black rounded" style={{ border: "1px solid black" }}>
            <form className="needs-validation m-3" noValidate>
              <center><h2>Register</h2></center>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Your Name" name="name" value={this.state.name} onChange={this.handleChange} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter Your Email" name="email"value={this.state.email} onChange={this.handleChange} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
              <div className="form-group">
                <label htmlFor="usname">Username:</label>
                <input type="text" className="form-control" id="usname" placeholder="Enter username" name="username" value={this.state.username} onChange={this.handleChange} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
              <div className="form-group">
                <label htmlFor="pwds">Password:</label>
                <input type="password" className="form-control" id="pwds" placeholder="Enter password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile:</label>
                <input type="number" className="form-control" id="mobile" placeholder="Enter Your Mobile number" name="mobile" value={this.state.mobile} onChange={this.handleChange} required />
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
                onClick={this.register}
                className="m-2 mb-3 btn btn-primary"
              >Go To Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendRegisterDetail: payload => dispatch(registerUser(payload))
})


export default connect(null, mapDispatchToProps) (Register)
