import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details : {
                id : 0,
                name : "",
                age : "",
                address : "",
                department : "HR",
                salary : ""
            }
        }
    }

    componentDidUpdate(){
        if(this.props.emp.length > 0){
            console.log(this.props.emp, "data has arrived to edit")
            this.setState({
                id : this.props.emp.id,
                name : this.props.emp.name,
                age : this.props.emp.id,
                address : this.props.emp.id,
                department : this.props.emp.id,
                salary : this.props.emp.id
            })
        }
    }

    //  Handles Change
    handleChange = (e) => {
        const newDetails = {
            ...this.state.details
        }
        newDetails[e.target.name] = e.target.value
        this.setState({ details : newDetails })
    }

    // Checks Form validity
    isInvalidForm = () => {
        const { address, age, name,salary} = {...this.state.details}
        console.log(name, age, address, salary)
        if(name.length === 0){
            alert("You got a name right, so please enter that?")
            return true
        }
        else if((Number(age) < 18) || (Number(age) > 100) || (isNaN(age))){
            if(Number(age) < 18)
                alert("Sorry Kiddo but we don't do child labour")
            else if(Number(age) > 100)
                alert("You have crossed your retirement age")
            return true
        }
        else if(address.length === 0){
            alert("Are you homeless?")
            return true
        }
        else if(isNaN(salary) || (Number(salary) <= 0) || (Number(salary) > 10000000)){
            console.log(salary)
            if(salary.length === 0)
                alert("Please enter a salary")
            else if(Number(salary) <= 0)
                alert("Hey Liar! We pay more than this")
            else if(Number(salary) > 10000000)
                alert("Our CTO earns less than this, plz find another job")
            return true
        }
        else
            return false
    }

    // Handles Submit
    handleSubmit = (e) => {
        e.preventDefault()
        if(this.isInvalidForm()){
            // alert("Invalid Inputs")
            return
        }
        const updated = { ...this.state.details }
        updated.id += 1
        this.setState({ details : updated })
        this.handleReset()
        this.props.data(updated)
    }

    // Resets Form after Submission
    handleReset = () => {
        const empty = {
            ...this.state.details
        }
        // empty["id"] += 1
        empty["name"] = ""
        empty["age"] = ""
        empty["address"] = ""
        empty["department"] = "HR"
        empty["salary"] = ""
        this.setState({ details : empty })
    }

    // Clears the Local Storage
    handleLocalStorage = () => {
        localStorage.clear()
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
                                            value = {this.state.details.name} 
                                            required />
                                </div>
                            </div>
                            {/* Age Input */}
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Age</label>
                                    <div className="col-sm-7 ">
                                        <input  type="text" 
                                                className="form-control formEle" 
                                                placeholder="Enter Age"
                                                name = "age" 
                                                onChange = {this.handleChange}
                                                value = {this.state.details.age} />
                                    </div>
                            </div>
                            {/* Address Input */}
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Address</label>
                                <div className="col-sm-7">
                                    <textarea className="form-control formEle" rows="2"
                                            placeholder = "Enter your address"
                                            name = "address" 
                                            onChange = {this.handleChange}
                                            value = {this.state.details.address} >
                                    </textarea>
                                </div>
                            </div>
                            {/* Department Input */}
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Department</label>
                                <div className="col-sm-7">
                                    <select name = "department" 
                                            className="form-control" 
                                            value = {this.state.details.department} 
                                            onChange = {this.handleChange} >
                                        <option value = "IT">IT</option>
                                        <option value = "HR">HR</option>
                                        <option value = "Developer">Developer</option>
                                        <option value = "Back-End">Back-End</option>
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
                                            value = {this.state.details.salary} required />
                                </div>
                            </div>
                            {/* Submit Btn*/}
                            <div className = "form-group row pt-3">
                                <div className="text-center col-6 offset-3">
                                    <button onClick = {this.handleSubmit} type="submit" className="btn btn-outline-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                        {/* Clear Local Storage Btn */}
                        <div className="text-center col-6 offset-3 mb-3">
                                <button onClick = {this.handleLocalStorage} type="submit" className="btn btn-outline-dark">Clear Local Storage</button>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
