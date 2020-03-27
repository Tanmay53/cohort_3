import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert'

class Add extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "",
            email : "",
            department: "",
            gender: "",
            salary: ""
        }
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = (e) =>{
        e.preventDefault()
        let token = localStorage.getItem("token")
        let isLoggedIn = localStorage.getItem("isLoggedIn")
        let name = this.state.name
        let email = this.state.email
        let salary = this.state.salary
        let gender = this.state.gender
        let department = this.state.department
        if(name === "" || email === "" || gender === "" || department === "" || salary === ""){
            swal("Fill all the table","try again","error")
        }
        else if(JSON.parse(token) != null && JSON.parse(isLoggedIn) === true){
            const tokenCheck = {
                headers : {Authorization : "Bearer "+JSON.parse(token)}
            }
            axios.post('http://127.0.0.1:5000/add',{
                "name" : name,
                "email" : email,
                "salary" : salary,
                "gender" : gender,
                "department": department
            },tokenCheck).then
            (res =>{
                if(res.data.message === "Email Already exist"){
                    swal(res.data.message,"try again","error")
                }
                else if(res.data.message === "employee added"){
                    swal(res.data.message,"welcome","success")
                }
                else{
                    swal(res.data,"try again","error")
                }
            }
            ).catch(error => swal(error,"try again","error"))
    
            this.setState({
                name : "",
                email : "",
                department:"",
                gender : "",
                salary: ""
            })
        }
        else if(JSON.parse(isLoggedIn) === false){
            swal("Login First","try again","error")
        }
        
    }


    render() {
        return (
            <div>
                <div className="bgLogin mt-5">
                    <h3 className="text-center mt-1">Add Employee Data</h3>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Name</label>
                        <input className="form-control" onChange={this.handleChange} type="text" value={this.state.name} name="name" placeholder="Enter Name" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Email</label>
                        <input className="form-control" onChange={this.handleChange} type="email" value={this.state.email} name="email" placeholder="Enter email" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Salary</label>
                        <input className="form-control" onChange={this.handleChange} type="number" value={this.state.salary} name="salary" placeholder="Enter employee salary" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Gender</label>
                        <select className="custom-select" id="inputGroupSelect01" name="gender" value={this.state.gender} onChange={this.handleChange} >
                            <option defaultValue>Choose..</option>
                            <option value="male">Male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Department</label>
                        <select className="custom-select" id="inputGroupSelect01" name="department" value={this.state.department} onChange={this.handleChange} >
                            <option defaultValue>Choose..</option>
                            <option value="account">Account</option>
                            <option value="sales">Sales</option>
                            <option value="it">IT</option>
                        </select>
                    </div>
                    <div>
                        <button className="btn btn-primary mt-3 ml-3 mb-3" onClick={this.handleClick}>Add Employee</button>
                    </div>
                </div>
            </div>
        )
    }
}



export default Add
