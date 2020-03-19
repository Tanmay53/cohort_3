import React, { Component } from 'react'
import { connect } from 'react-redux';
import { filterGender, filterDept, sortSalary} from "../redux/admin/actions"

export class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: "all",
            dept: "all",
            sort: "asc" 
        }
    }
    
    handleSort = (e) => {
        console.log(e.target.value, "sort");
        const sort = e.target.value;
        this.props.salary(e.target.value)
        this.setState({ sort: sort });
    }

    handleDept = (e) => {
        console.log(e.target.value, "dept");
        const dept = e.target.value;
        this.props.dept(dept)
        this.setState({ dept: dept });
    }
    handleGender = (e) => {
        console.log(e.target.value, "gender");
        const gender = e.target.value;
        this.props.gender(e.target.value)
        this.setState({ gender: gender });
    }
    render() {
        return (
            <div className="container">
                <div className="form-group row">
                    {/* Filter based on Department */}
                    <div className="col-4">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                            <label className="input-group-text">Filter</label>
                            </div>
                            <select className="custom-select" onChange={this.handleDept}>
                                <option value="all">All Gender</option>
                                <option value = "Male">Male</option>
                                <option value = "Female">Female</option>
                                <option value = "Can't Say">Can't Say</option>
                            </select>
                        </div>
                    </div>
                    {/* Filter based on Gender */}
                    <div className="col-4">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                            <label className="input-group-text">Filter</label>
                            </div>
                            <select className="custom-select" onChange={this.handleGender}>
                                <option value="all">All Dept</option>
                                <option value="IT">IT</option>
                                <option value="HR">HR</option>
                                <option value="Developer">Developer</option>
                                <option value="Back-End">Back-End</option>
                                <option value="Front-End">Front-End</option>
                            </select>
                        </div>
                    </div>
                    {/* Sort based on salary */}
                    <div className="col-4 ">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                            <label className="input-group-text">Salary Sort</label>
                            </div>
                            <select className="custom-select" onChange={this.handleSort}>
                            <option value="asc">Ascending</option>
                            <option value="dec">Descending</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    dept: (payload) => dispatch(filterDept(payload)),
    gender: (payload) => dispatch(filterGender(payload)),
    salary: (payload) => dispatch(sortSalary(payload))
  });

export default connect(null, mapDispatchToProps)(Filter)
