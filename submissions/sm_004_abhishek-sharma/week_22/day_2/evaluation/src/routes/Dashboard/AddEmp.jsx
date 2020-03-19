import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEmp } from "../../redux/admin/actions"

export class AddEmp extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id : 0,
                name : "",
                gender : "Male",
                department : "HR",
                salary : ""
        }
    }

    //  Handles Change
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // Checks Form validity
    isInvalidForm = () => {
        const { name,salary} = {...this.state}
        // console.log(name, salary)
        if(name.length === 0){
            alert("You got a name right, so please enter that?")
            return true
        }
        else if(isNaN(salary) || (Number(salary) <= 0) || (Number(salary) > 10000000)){
            if(salary.length === 0)
                alert("Please enter a salary")
            else if(Number(salary) <= 0)
                alert("Hey! We pay more than this")
            else if(Number(salary) > 10000000)
                alert("Our CEO earns less than this, plz find another job")
            return true
        }
        else
            return false
    }

    // Handles Submit
    handleSubmit = (e) => {
        e.preventDefault()
        if(this.isInvalidForm()){
            this.handleReset()
            return
        }
        this.props.add(this.state)
        this.handleReset()
    }

    // Resets Form after Submission
    handleReset = () => {
        this.setState({
            id : this.state.id+1,
            name : "",
            gender : "Male",
            department : "HR",
            salary : ""
        })
    }

    render() {
        return (
            <div className="container mt-3 ">
                <div className="row mb-5 d-flex justify-content-center">
                    <div className="col-10 col-md-8 col-lg-6 mt-2 p-3 bg-light border shadow rounded">
                        <div className="text-center pb-2">
                            <h1>Employee Details</h1>
                        </div>
                        <form className = "text-center ">
                            {/* Name Input */}
                            <div className="form-group row ">
                                <label className="col-sm-4 col-form-label">Name</label>
                                <div className="col-sm-7 ">
                                    <input  type="text" 
                                            className="form-control formEle" 
                                            placeholder="Enter Name"
                                            name = "name" 
                                            onChange = {this.handleChange}
                                            value = {this.state.name} 
                                            required />
                                </div>
                            </div>
                            {/* Gender Input */}
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Gender</label>
                                <div className="col-sm-7">
                                    <select name = "gender" 
                                            className="form-control" 
                                            value = {this.state.gender} 
                                            onChange = {this.handleChange} >
                                        <option value = "Male">Male</option>
                                        <option value = "Female">Female</option>
                                        <option value = "Can't Say">Can't Say</option>
                                    </select>
                                </div>
                            </div>
                            {/* Department Input */}
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Department</label>
                                <div className="col-sm-7">
                                    <select name = "department" 
                                            className="form-control" 
                                            value = {this.state.department} 
                                            onChange = {this.handleChange} >
                                        <option value = "IT">IT</option>
                                        <option value = "HR">HR</option>
                                        <option value = "Developer">Developer</option>
                                        <option value = "Back-End">Back-End</option>
                                        <option value = "Front-End">Front-End</option>
                                    </select>
                                </div>
                            </div>
                            {/* Salary Input */}
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Salary</label>
                                <div className="col-sm-7">
                                    <input  type="text" 
                                            className="form-control formEle" 
                                            placeholder="Enter Salary"
                                            name = "salary" 
                                            onChange = {this.handleChange}
                                            value = {this.state.salary} required />
                                </div>
                            </div>
                            {/* Submit Btn*/}
                            <div className = "form-group row pt-3">
                                <div className="text-center col-6 offset-3">
                                    <button onClick = {this.handleSubmit} type="submit" className="btn btn-outline-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    add: (payload) => dispatch(addEmp(payload))
})

export default connect(null, mapDispatchToProps)(AddEmp)
