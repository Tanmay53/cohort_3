import React, { Component } from 'react'
import {connect} from "react-redux";
import { addEmployee } from "../redux/action"

class AddEmp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"",
       gender:"Male",
       department:"Account",
       salary:""
    }
  }
  handleChange = (e) => {

    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleClick = (e) => {
    e.preventDefault();
    const {sendEmpDetail} = this.props;
    sendEmpDetail(this.state)
  }

  home = (e) => {
    e.preventDefault();
    this.props.history.push("")
  }
  
  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-6 mt-3 shadow p-3 mb-5 bg-black rounded" style={{ border: "1px solid black" }}>
            <form className="needs-validation m-3" id="form1" noValidate>
              <center><h2>Add Employee</h2></center>
              <div className="form-group">
                <label htmlFor="ename">Name:</label>
                <input type="text" className="form-control" id="ename" placeholder="Enter Your Name" name="name" value={this.state.name} onChange={this.handleChange} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <select name="gender" id="gender" className="form-control" onChange={this.handleChange}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
              <div className="form-group">
                <label htmlFor="department">Department:</label>
                <select name="department" id="gender" className="form-control" onChange={this.handleChange}>
                  <option value="account">Account</option>
                  <option value="reception">Reception</option>
                  <option value="mentor">Mentor</option>
                  <option value="manager">Manager</option>
                </select>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
              <div className="form-group">
                <label htmlFor="salary">Salary:</label>
                <input type="number" className="form-control" id="salary" placeholder="Enter Salary" name="salary" value={this.state.mobile} onChange={this.handleChange} required />
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
                onClick={this.home}
                className="m-2 mb-3 btn btn-primary"
              >Go To Home</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmpDetail: payload => dispatch(addEmployee(payload))
})


export default connect(null, mapDispatchToProps) (AddEmp)