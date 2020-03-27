import React, { Component } from 'react'
import uuid from "uuid"
class Addempdata extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:uuid(),
            empname: '',
            gender: '',
            department: '',
            salary: '',
            empData:[]

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.reset()
        const newData = {
            id: this.state.id,
            empname: this.state.empname,
            gender: this.state.gender,
            department: this.state.department,
            salary: this.state.salary
        }
        const updatedData = [...this.state.empData, newData]
        this.setState({
            empData: updatedData,
            id: uuid()

        })
        
    }
    reset = () => {
        this.setState({
            empname: '',
            gender: '',
            department: '',
            salary: ''
        })
    }
    render() {
        const {empname,gender,department,salary}  = this.state
        return (
            <div>
               <div className="container">
               <form onSubmit={this.handleSubmit}>
                        <div className="container">
                            Employee Name:
                            <input type="text" className="form-control" name="empname" placeholder="Enter Your Name"  value ={empname} onChange = {this.handleChange} required/>
                            Gender:
                            <select value={gender} name="gender" className="form-control" onChange={this.handleChange} required>
                                <option value="">--</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                            Department:
                            <select value={department} name="department" className="form-control" onChange={this.handleChange} required>
                                <option value="">--</option>
                                <option value="sales">Sales</option>
                                <option value="marketing">Marketing</option>
                                <option value="HR">HR</option>
                                <option value="Accounting">Accounting</option>
                            </select>
                            Salary:
                            <input type="text" className="form-control" name = "salary" placeholder="Enter Salary" value={salary} onChange = {this.handleChange} required />
                            <br></br>
                            <button type="submit" className="btn btn-light mb-3 ml-3" onSubmit = {this.submit}>Submit</button>
                        </div>
                    </form> 
               </div>
            </div>
        )
    }
}

export default Addempdata
