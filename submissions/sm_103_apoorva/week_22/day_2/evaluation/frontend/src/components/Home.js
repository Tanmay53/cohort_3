import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'

export class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            department: "",
            gender: "",
            salary: "",
            employee : [],
            duplicate : [],
            clickVal: 0
        }
    }


    componentDidMount=()=>{
        let token = localStorage.getItem("token")
        let isLoggedIn = localStorage.getItem("isLoggedIn")
        if(JSON.parse(token) != null && JSON.parse(isLoggedIn) === true){
            const tokenCheck = {
                headers : {Authorization : "Bearer "+JSON.parse(token)}
            }
            axios.post('http://127.0.0.1:5000/emp',{
                "clickVal" : 0
            },tokenCheck).then
            (res =>{
                console.log(res.data.employee)
                this.setState({
                    employee:res.data.employee,
                    duplicate:res.data.employee
                })
            }
            ).catch(error => swal(error,"try again","error"))
        }
    }

    salarySort=(event)=>{
        this.setState({
            salary: event.target.value
        })
        let token = localStorage.getItem("token")
        let isLoggedIn = localStorage.getItem("isLoggedIn")
        if(JSON.parse(token) != null && JSON.parse(isLoggedIn) === true){
            const tokenCheck = {
                headers : {Authorization : "Bearer "+JSON.parse(token)}
            }
            axios.post('http://127.0.0.1:5000/salarysort',{
                "type" : event.target.value
            },tokenCheck).then
            (res =>{
                console.log(res.data.employee)
                this.setState({
                    employee:res.data.employee,
                    duplicate:res.data.employee
                })
            }
            ).catch(error => swal(error,"try again","error"))
        }
    }

    genderChange=(event)=>{
        this.setState({
            gender: event.target.value
        })
        let token = localStorage.getItem("token")
        let isLoggedIn = localStorage.getItem("isLoggedIn")
        if(JSON.parse(token) != null && JSON.parse(isLoggedIn) === true){
            const tokenCheck = {
                headers : {Authorization : "Bearer "+JSON.parse(token)}
            }
            axios.post('http://127.0.0.1:5000/genderfilter',{
                "gender" : event.target.value
            },tokenCheck).then
            (res =>{
                console.log(res.data.employee)
                this.setState({
                    employee:res.data.employee,
                    duplicate:res.data.employee
                })
            }
            ).catch(error => swal(error,"try again","error"))
        }
    }

    departmentChange=(event)=>{
        this.setState({
            department: event.target.value
        })
        let token = localStorage.getItem("token")
        let isLoggedIn = localStorage.getItem("isLoggedIn")
        if(JSON.parse(token) != null && JSON.parse(isLoggedIn) === true){
            const tokenCheck = {
                headers : {Authorization : "Bearer "+JSON.parse(token)}
            }
            axios.post('http://127.0.0.1:5000/departmentfilter',{
                "department" : event.target.value
            },tokenCheck).then
            (res =>{
                console.log(res.data.employee)
                this.setState({
                    employee:res.data.employee,
                    duplicate:res.data.employee
                })
            }
            ).catch(error => swal(error,"try again","error"))
        }
    }

    next=()=>{
        this.setState({
            clickVal : this.state.clickVal+1
        })
        let token = localStorage.getItem("token")
        let isLoggedIn = localStorage.getItem("isLoggedIn")
        if(JSON.parse(token) != null && JSON.parse(isLoggedIn) === true){
            const tokenCheck = {
                headers : {Authorization : "Bearer "+JSON.parse(token)}
            }
            axios.post('http://127.0.0.1:5000/emp',{
                "clickVal" : this.state.clickVal+1
            },tokenCheck).then
            (res =>{
                console.log(res.data.employee)
                this.setState({
                    employee:res.data.employee,
                    duplicate:res.data.employee
                })
            }
            ).catch(error => swal(error,"try again","error"))
        }
    }

    back=()=>{
        this.setState({
            clickVal : this.state.clickVal-1
        })
        let token = localStorage.getItem("token")
        let isLoggedIn = localStorage.getItem("isLoggedIn")
        if(JSON.parse(token) != null && JSON.parse(isLoggedIn) === true){
            const tokenCheck = {
                headers : {Authorization : "Bearer "+JSON.parse(token)}
            }
            axios.post('http://127.0.0.1:5000/emp',{
                "clickVal" : this.state.clickVal-1
            },tokenCheck).then
            (res =>{
                console.log(res.data.employee)
                this.setState({
                    employee:res.data.employee,
                    duplicate:res.data.employee
                })
            }
            ).catch(error => swal(error,"try again","error"))
        }
    }

    render() {
        return (
            <div>
                {this.props.isloggedIn ? (
                    <div className="container-fluid">
                        <div className="row">
                            <div className = "col ml-3 mt-2">
                                <div className="card" style={{width:"12rem"}}>
                                    <div className="card-body">
                                        <h5 className="card-title">Depatment Filter</h5>
                                        <select className="custom-select" id="inputGroupSelect01" name="department" value={this.state.department} onChange={this.departmentChange} >
                                            <option defaultValue>Choose..</option>
                                            <option value="all">All</option>
                                            <option value="account">Account</option>
                                            <option value="sales">Sales</option>
                                            <option value="it">IT</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className = "col mt-2">
                                <div className="card" style={{width:"12rem"}}>
                                    <div className="card-body">
                                        <h5 className="card-title">Gender Filter</h5>
                                        <select className="custom-select" id="inputGroupSelect01" name="gender" value={this.state.gender} onChange={this.genderChange} >
                                            <option defaultValue>Choose..</option>
                                            <option value="all">All</option>
                                            <option value="male">Male</option>
                                            <option value="female">female</option>
                                            <option value="other">other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className = "col mt-2">
                                <div className="card" style={{width:"12rem"}}>
                                    <div className="card-body">
                                        <h5 className="card-title">Salary Sort</h5>
                                        <select className="custom-select" id="inputGroupSelect01" name="gender" value={this.state.gender} onChange={this.salarySort} >
                                            <option defaultValue>Choose..</option>
                                            <option value="asc">Ascending</option>
                                            <option value="dsc">Descending</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="container-fluid">
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Department</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.duplicate.map(ele =>{
                                        return(<tr>
                                            <td>{ele.name}</td>
                                            <td>{ele.department}</td>
                                            <td>{ele.gender}</td>
                                            <td>{ele.salary}</td>
                                        </tr>)
                                    })}
                                </tbody>
                            </table>
                        </div>
                        {this.state.clickVal != 0 ? (
                        <button className="btn btn-lg bg-info float-left m-5" onClick={this.back}>Back</button>
                        ):(
                            <div></div>
                        )}
                        <button className="btn btn-lg bg-info float-right m-5" onClick={this.next}>Next</button>
                    </div>
                ):(
                    <Redirect to="signin" />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isloggedIn : state.isloggedIn
});


export default connect(mapStateToProps,null)(Home)
