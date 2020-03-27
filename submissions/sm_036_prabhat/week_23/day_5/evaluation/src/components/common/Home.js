import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteEmployee, changePage } from "./../../redux/action";
import PageList from './PageList'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gender: '',
            department: '',
            salary: '',
            data: this.props.employeeData,
        }
    }

    // Handeling Sort Filter on Change
    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        // Filter Based On Gender
        if (e.target.name === "gender") {
            let selectedGender = this.state.data.filter((item, index) => item.gender === e.target.value);
            this.setState({
                data: selectedGender
            })
            if (e.target.value === "All") {
                this.setState({
                    data: this.props.employeeData
                })
            }
        }

        // Filter Based On Department
        else if (e.target.name === "department") {
            let selectedDepartment = this.state.data.filter((item, index) => item.department === e.target.value);
            this.setState({
                data: selectedDepartment
            })
            if (e.target.value === "All") {
                this.setState({
                    data: this.props.employeeData
                })
            }
        }

        // Sorting Based On Salary
        else if (e.target.name === "salary") {
            this.state.data.sort((a, b) => {
                if (e.target.value === "Accending") {
                    return a.salary - b.salary
                }
                else {
                    return b.salary - a.salary
                }
            })
        }

    }

    // Deleting from state and Diapatching Delete Action
    handelDelete = (ind) => {
        let deletedData = this.state.data.filter((item, index) => index !== ind)
        console.log("del", deletedData)
        this.setState({
            data: deletedData
        });

        this.props.deleteEmployee(ind)
    }


    render() {
        const page = this.props.page;
        console.log("state", this.state)
        return (
            <div>
                {/* Nav */}
                <div className="container-fluid bg bg-dark">
                    <div className="text-center p-4 text-white display-3">Employee Records</div>
                </div>

                {/* Add Employee Button */}

                <div className="container">
                    <div className="d-flex justify-content-around p-4">
                        <Link to="/addemployee">
                            <button className="btn-lg btn-outline-secondary">Add Employee</button>
                        </Link>
                    </div>

                    {/* Table */}

                    <table className="table">
                        {/* Table Heading content */}
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Sr. No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Gender
                                    <select className="custom-select" name="gender" value={this.state.gender} onChange={this.handelChange} >
                                        {["All", "Male", "Female"].map((item, index) => <option key={item + index} value={item}>{item}</option>)}
                                    </select>
                                </th>
                                <th scope="col">Department
                                    <select className="custom-select" name="department" value={this.state.department} onChange={this.handelChange} >
                                        <option value="All">All</option>
                                        {this.props.departmentData.map((item, index) => <option key={item + index} value={item}>{item}</option>)}
                                    </select>
                                </th>
                                <th scope="col">Salary
                                    <select className="custom-select" name="salary" value={this.state.salary} onChange={this.handelChange} >
                                        {["Accending", "Decending"].map((item, index) => <option key={item + index} value={item}>{item}</option>)}
                                    </select>
                                </th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* Mapping Data on Table */}
                            {this.state.data.filter((a, i) => i >= this.props.perPage * (page - 1) && i < this.props.perPage * page).map((item, index) =>
                                <tr key={item.name + index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.department}</td>
                                    <td>{item.salary}</td>
                                    <td><button className="btn btn-outline-danger" onClick={() => this.handelDelete(index)}>Delete</button></td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-center">
                    {<PageList />}
                </div>
            </div>
        )
    }
}

// Accessing Data from Store
const mapStateToProps = (state) => ({
    employeeData: state.employeeData,
    departmentData: state.departmentData,
    page: state.page,
    perPage: state.perPage
})

// Dispatching Action
const mapDispatchToProps = dispatch => ({
    deleteEmployee: (payload) => dispatch(deleteEmployee(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)