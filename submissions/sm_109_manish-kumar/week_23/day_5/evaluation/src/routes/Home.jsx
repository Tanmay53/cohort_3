import React, { Component } from 'react'
import {connect} from "react-redux";
import Pagination from "./Pagination"
import {
  salarySortDec,
  filterDepartment,
  salarySortInc
} from "../redux/action"

class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentPage:1,
       postPerPage:20
    }
  }
  
  
  addemploye = (e) => {
    e.preventDefault();
    this.props.history.push("/add-employee")
  }

  selectChange = (e) => {
    if(e.target.value === "salary Increase"){
      const {sortSalaryInc} = this.props;
      sortSalaryInc()
    }
    if(e.target.value === "salary Decrease"){
      const {sortSalarydec} = this.props;
      sortSalarydec()
    }
  }

  filterChange = (e) => {
    const {depart} = this.props;
    depart(e.target.value)
  }
  paginate = (number) => {
    this.setState ({
      currentPage: number
    })
  }


  render() {
    const {data} = this.props;
    const {currentPage,postPerPage} = this.state
    const lastPost = currentPage*postPerPage;
    const firstPost = lastPost - postPerPage
    const currentData = data.slice(firstPost, lastPost)
    
    return (
      <div>
        <div className="d-flex justify-content-around m-4 bg-dark p-2">
          <div>
            <select name="filter" className="form-control" onClick= {this.filterChange}>Filter
            <option value="account">Account</option>
            <option value="reception">Reception</option>
            <option value="mentor">Mentor</option>
            <option value="manager">Manager</option>
            </select>
          </div>
          <div>
            <select name="sort" className="form-control" onClick= {this.selectChange}>Sort
            <option value="salary Increase">Salary Increase</option>
            <option value="salary Decrease">Salary Decrease</option>
            </select>
          </div>
        <div>
          <button className="nav-link btn btn-primary" onClick={this.addemploye}>Add Employee</button>
        </div>
        </div>
        <div className="p-2 m-4">
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((ele, i) => {
                return(
                  <tr key={i}>
                    <td>{ele.name} </td>
                    <td>{ele.gender} </td>
                    <td>{ele.department} </td>
                    <td>{ele.salary} </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <Pagination
        postsPerPage={this.state.postsPerPage}
        totalPosts={data}
        paginate={this.paginate}
      />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  data:state.newData
})

const mapDispatchToProps = dispatch => ({
  sortSalaryInc: () => dispatch(salarySortInc()),
  sortSalarydec: () => dispatch(salarySortDec()),
  depart: (payload) => dispatch(filterDepartment(payload))
})

export default connect (mapStateToProps, mapDispatchToProps) (Home)
