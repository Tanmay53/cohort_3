import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Navbar extends Component {
  addemploye = (e) => {
    e.preventDefault();
    this.props.history.push("/add-employee")
  }
  render() {
    return (
      <div className="d-flex justify-content-around m-4 bg-dark p-2">
        <div>
          <select name="filter" className="form-control">Filter
          <option value="filter">Filter</option>
          <option value="department">Department</option>
          <option value="gender">Gender</option>
          </select>
        </div>
        <div>
          <select name="sort" className="form-control">Sort
          <option value="sort">Sort</option>
          <option value="salary">Salary</option>
          </select>
        </div>
       <div>
         <button className="nav-link btn btn-primary" onClick={this.addemploye}>Add Employee</button>
       </div>
      </div>
    )
  }
}
