import React, { useState } from 'react'
import { connect } from "react-redux"
import { fetch_employees } from "../REDUX/Action"


const Functionality = ({ fetch_employees, page }) => {
    const [filter_by, setFilter] = useState("gender")
    const [filter_input, setFilterInput] = useState("")
    const [dp_list] = useState(JSON.parse(localStorage.getItem("dp_list")))
    const filter_emp = () => {
        fetch_employees({ "page_num": Number(page), "sort_type": "", "filter_input": filter_input, "filter_by": filter_by }, "/filter")
    }
    return (
        <div className="row p-2">
            <div className="col-lg-4 col-md-6 col-12">
                <select onChange={(e) => {
                    setFilter(e.target.value)
                }} className="custom-select">
                    <option selected disable>Select filterby</option>
                    <option value="department">
                        Department
                </option>
                    <option value="gender">
                        Gender
                </option>
                </select>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <select className="custom-select" onChange={(e) => {
                    setFilterInput(e.target.value)
                    filter_emp()
                }}>
                    <option selected disable>Select Option</option>
                    {filter_by == "department" ? <> {dp_list.map((e, i) => {
                        return <option value={e.id} key={i}>{e.department}</option>
                    })}</> : <>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </>}
                </select>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <select className="custom-select" id="">
                    <option selected disabled>Sort by Salary</option>
                    <option value="asc">ASC</option>
                    <option value="desc">DESC</option>
                </select>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        fetch_employees: (data, url) => dispatch(fetch_employees(data, url))
    }
}

export default connect(null, mapDispatchToProps)(Functionality)
