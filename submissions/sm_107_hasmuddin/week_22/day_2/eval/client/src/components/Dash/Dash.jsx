import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import { fetch_employees } from "../REDUX/Action"
import Employee_table from "./Employee_table"
import Pagination from "./Pagination"
import Functionality from "./Functionality"
import Navbar from "./Navbar"

const Dash = ({ fetch_employees, employees_data }) => {
  const [curr_page, setPage] = useState(1)
  useEffect(() => {
    fetch_employees({ "page_num": curr_page, "sort_type": "" }, "/")

  }, [])

  const change_page = (e) => {
    setPage(e.target.value)
    fetch_employees({ "page_num": Number(e.target.value), "sort_type": "" }, "/")
    console.log(e.target.value)
  }
  return (
    <div className="container">
      <Navbar />
      {employees_data == undefined ? null : <Pagination buttons={employees_data.total_emp} page={curr_page} change_page={change_page} />}
      <Functionality page={curr_page} />
      {employees_data == undefined ? <h1>Loading...</h1> : <Employee_table employees={employees_data.employees} data={employees_data} />}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    state: state,
    employees_data: state.employees_data,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetch_employees: (data, url) => dispatch(fetch_employees(data, url))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dash)
