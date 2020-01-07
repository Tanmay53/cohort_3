import React, { Component } from "react";
import TableData from "./TableData";

class Employee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      address: "",
      dep: "",
      salary: "",
      employeeSetLocalArr: [],
      employeeGetLocalArr: []
    };
  }

  inputNameHandler = e => {
    this.setState({
      name: e.target.value
    });
  };

  inputAgeHandler = e => {
    this.setState({
      age: e.target.value
    });
  };

  inputAddressHandler = e => {
    this.setState({
      address: e.target.value
    });
  };

  inputDepartmentHandler = e => {
    this.setState({
      dep: e.target.value
    });
  };

  inputSalaryHandler = e => {
    this.setState({
      salary: e.target.value
    });
  };

  submitFrom = e => {
    e.preventDefault();
    // Store detail of Empolyee in emp
    let emp = {
      name: this.state.name,
      age: this.state.age,
      address: this.state.address,
      dep: this.state.dep,
      salary: this.state.salary
    };

    // Push empolyee data this.state.employeeArr
    this.state.employeeSetLocalArr.push(emp);
    let storeEmp;
    storeEmp = JSON.stringify(this.state.employeeSetLocalArr);
    // Set employee details in local storage
    localStorage.setItem("ArrayEmp", storeEmp);

    // Get employee details from local storage
    this.state.employeeGetLocalArr = JSON.parse(
      localStorage.getItem("ArrayEmp")
    );

    console.log(this.state.employeeGetLocalArr);
    // Clear input boxes
    this.setState({
      name: "",
      age: "",
      address: "",
      dep: "Choose Post",
      salary: ""
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <p className="display-4 text-center pt-5 -b-3">
            Please enter employee details
          </p>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6 offset-3">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={e => this.inputNameHandler(e)}
                />
              </div>
              <div className="form-group col-md-6 offset-3">
                <label htmlFor="">Age</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.age}
                  onChange={e => this.inputAgeHandler(e)}
                />
              </div>
              <div className="form-group col-md-6 offset-3">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.address}
                  onChange={e => this.inputAddressHandler(e)}
                />
              </div>
              <div className="form-group col-md-6 offset-3">
                <label htmlFor="">Department</label>
                <select
                  className="form-control"
                  onChange={e => this.inputDepartmentHandler(e)}
                >
                  <option value="Choose Post">Choose Post</option>
                  <option value="Junior Developer">Junior Developer</option>
                  <option value="Senior Developer">Senior Developer</option>
                  <option value="Team Leader">Team Leader</option>
                  <option value="Manager">Manager</option>
                </select>
              </div>
              <div className="form-group col-md-6 offset-3">
                <label htmlFor="">Salary</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.salary}
                  onChange={e => this.inputSalaryHandler(e)}
                />
              </div>
              <div className="form-group col-md-6 offset-3">
                <button
                  type="submit"
                  className="btn btn-dark w-100"
                  onClick={e => this.submitFrom(e)}
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
        <TableData data={this.state.employeeGetLocalArr} />
      </div>
    );
  }
}

export default Employee;
