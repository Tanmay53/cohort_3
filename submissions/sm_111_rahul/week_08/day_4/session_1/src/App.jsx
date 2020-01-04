/** @format */
import React, { Component } from "react";
import "./App.css";
import EmployeeTable from "./components/table.jsx";
import FilterNSort from "./components/filterAndSort.jsx";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeDetails: {
        name: "",
        age: 0,
        department: "",
        salary: 0,
        address: ""
      },
      employeeList: [],
      employeeListCopy : []
    };
  }
  handleChange = e => {
    const { name, value } = e.target;
    let newEmployee = { ...this.state.employeeDetails, [name]: value };
    this.setState({
      employeeDetails: newEmployee
    });
  };

  submitEmployeeDetails = e => {
    e.preventDefault();
    let empList = [
      ...this.state.employeeList,
      { ...this.state.employeeDetails }
    ];
    this.setState(() => ({
      employeeList: empList,
      employeeListCopy : empList
    }));
    let storedData = localStorage.getItem("employeeList");
    if (storedData == null) {
      localStorage.setItem("employeeList", JSON.stringify([...empList]));
    } else {
      localStorage.removeItem("employeeList");
      localStorage.setItem("employeeList", JSON.stringify([...empList]));
    }
    console.log(this.state.employeeList);
  };
  componentDidMount() {
    let storedData = localStorage.getItem("employeeList");
    if (storedData !== null) {
      this.setState({
        employeeList: JSON.parse(storedData),
        employeeListCopy: JSON.parse(storedData)
      });
    }
  }
  filterEmployee = (e) =>{
    let empList = [...this.state.employeeList]
    let filteredList = empList.filter((ele) =>{
      if(ele.department == e){
        return ele
      }else if(e == 'All'){
        return ele
      }
    })
    this.setState({
      employeeListCopy:filteredList
    }) 
  }
  sortEmployee = (e) =>{
    let empList = [...this.state.employeeListCopy]
    if(e == 'asc'){
      empList.sort(function(a,b){
        return parseInt(a.salary)-parseInt(b.salary);
      })
      this.setState({
        employeeListCopy : empList
      })
    }else{
      empList.sort(function(a,b){
        return parseInt(b.salary)-parseInt(a.salary);
      })
      this.setState({
        employeeListCopy: empList
      })
    }
  }
  deleteEmployee = (e) => {
   let delKey = e.target.id;
   let empList = [...this.state.employeeList];
   let empListCopy = [...this.state.employeeListCopy];
   empList = empList.filter((ele) =>{
     return ele.age !== delKey
   })
   empListCopy = empListCopy.filter((ele) =>{
    return ele.age !== delKey
  })
  console.log(empListCopy)
   this.setState({
     employeeList: empList,
     employeeListCopy:empListCopy
   })
   this.setLocalStorageOnDelete(empListCopy)
  }
  setLocalStorageOnDelete(e){
  localStorage.removeItem("employeeList");
  localStorage.setItem("employeeList", JSON.stringify([...e]));

  }

  render() {
    return (
      <div className="container-fluid bg-dark row">
        <div className="col-lg-3 col-sm-12 text-light h3 p-3">
          <form onSubmit={this.submitEmployeeDetails}>
            <h1 className="text-warning">Enter Employee Details</h1>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                id="age"
                name="age"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="filter">Department</label>
              <select
                className="form-control"
                onChange={this.handleChange}
                name="department"
              >
                <option value="" selected disabled>
                  choose
                </option>
                <option value="Human Resource">Human Resource</option>
                <option value="Engineering">Engineering</option>
                <option value="Finance">Finance</option>
                <option value="Sales">Sales</option>
                <option value="Administration">Administration</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="salary">Salary</label>
              <input
                id="salary"
                name="salary"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn-lg btn-warning float-right">
              Submit
            </button>
          </form>
        </div>
        <div className="col-lg-9 col-sm-12 text-light h3 ">
          <FilterNSort filterEmp={this.filterEmployee.bind(this)} sortEmp = {this.sortEmployee.bind(this)}/>
          <h1 className="text-center">Employee Table</h1>
          <div className="row justify-content-center p-3">
            <EmployeeTable employeeList={this.state.employeeListCopy} deleteEmp={this.deleteEmployee.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
