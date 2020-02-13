import React, { Component } from "react";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dept: "all",
      original: this.props.data,
      details: this.props.data
    };
  }

  componentDidUpdate() {
    if (this.state.original.length !== this.props.data.length) {
      this.setState({ 
          original : this.props.data, 
          details : this.props.data
        });
    }
  }

//   Handles Filter by Dept
  handleFilter = e => {
    console.log(e.target.value, "dept");
    const dept = e.target.value;
    this.setState({ dept: dept });
  };

//   Sorts based on Salary
  sortSalary = e => {
    const type = e.target.value;
    console.log(type);
    let sortedData = [...this.state.details];
    if (type === "asc")
      sortedData = sortedData.sort((a, b) => a.salary - b.salary);
    else 
        sortedData = sortedData.sort((a, b) => b.salary - a.salary);
    this.setState({ details: sortedData });
  };

  render() {
    console.log(this.state.details, "render");
    return (
      <div>
        <div className="container">
          <div className="form-group row">
            {/* Filter based on Department */}
            <div className="col-4 ">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label className="input-group-text">Filter</label>
                </div>
                <select className="custom-select" onChange={this.handleFilter}>
                  <option value="all">All Dept</option>
                  <option value="IT">IT</option>
                  <option value="HR">HR</option>
                  <option value="Developer">Developer</option>
                  <option value="Back-End">Back-End</option>
                </select>
              </div>
            </div>
            {/* Sort based on salary */}
            <div className="col-6 offset-2">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label className="input-group-text">Salary Sort</label>
                </div>
                <select className="custom-select" onChange={this.sortSalary}>
                  <option value="asc">Ascending</option>
                  <option value="dec">Descending</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
                {/* Table */}
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Address</th>
                    <th scope="col">Department</th>
                    <th scope="col">Salary</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {(this.state.dept === "all")
                //   {this.state.details.length !== 0
                    ? this.state.details.map(el => {
                        return (
                          <tr key={el.id}>
                            <td className = "text-capitalize">{el.name}</td>
                            <td>{el.age}</td>
                            <td className = "text-capitalize">{el.address}</td>
                            <td>{el.department}</td>
                            <td>{el.salary}</td>
                            <td>
                                <button type = "button"
                                        className = "btn btn-outline-success"
                                        onClick = {() => this.props.edit(el)}>
                                    Edit
                                </button>
                            </td>
                            <td> 
                                <button type = "button" 
                                        className = "btn btn-outline-danger"
                                        onClick = {() => this.props.deleted(el.id)}>
                                    Delete
                                </button> 
                            </td>
                          </tr>
                        );
                      })
                    // : null
                    :this.state.details
                        .filter(el => el.department === this.state.dept)
                        .map(el => {
                          return (
                            <tr key={el.id}>
                                <td>{el.name}</td>
                                <td>{el.age}</td>
                                <td>{el.address}</td>
                                <td>{el.department}</td>
                                <td>{el.salary}</td>
                                <td>
                                    <button type = "button"
                                            className = "btn btn-outline-success"
                                            onClick = {() => this.props.edit(el)}>
                                        Edit
                                    </button>
                                </td>
                                <td> 
                                    <button type = "button" 
                                            className = "btn btn-danger"
                                            onClick = {() => this.props.deleted(el.id)}>
                                        Delete
                                    </button> 
                                </td>
                            </tr>
                          );
                        })
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
