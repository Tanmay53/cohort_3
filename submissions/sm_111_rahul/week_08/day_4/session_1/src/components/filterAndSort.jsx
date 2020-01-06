/** @format */

import React, { Component } from "react";
class FilterNSort extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleChange1 = this.handleChange1.bind(this)
  }
  handleChange = (e) =>{
    this.props.filterEmp(e.target.value)
  }
  handleChange1 = (e) =>{
    // console.log(e.target.value)
    this.props.sortEmp(e.target.value)
  }
  render() {
    return (
      <div className="row p-3 justify-content-center">
        <div className="col-lg-4 col-sm-12">
        <form className="mx-3">
            <div className="form-group">
              <label htmlFor="filter">Filter(Department)</label>
              <select className="form-control" name="department" onChange={this.handleChange}>
                <option disabled value="">choose</option>
                <option value="All">All</option>
                <option value="Human Resource">Human Resource</option>
                <option value="Engineering">Engineering</option>
                <option value="Finance">Finance</option>
                <option value="Sales">Sales</option>
                <option value="Administration">Administration</option>
              </select>
            </div>
            </form>
        </div>
        <div className="col-lg-4 col-sm-12">
          <form className="mx-3">
            <div className="form-group">
              <label htmlFor="sort">Sort(Salary)</label>
              <select className="form-control" onChange={this.handleChange1}>
                <option disabled selected value="">choose</option>
                <option value="asc">Ascending</option>
                <option value="dsc">Descending</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FilterNSort;
