import React, { Component } from 'react'
import axios from "axios"
// import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state ={
            username : '',
            password: ''
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:8080/auth/login",this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render() {
        const {username,password} = this.state
        return (
            <div>
               <div className="container bg-primary p-3">
                    <form onSubmit={this.submitHandler}>
                        Username:
                        <input type="text" className="form-control" name="username" value={username} placeholder="Enter your username" onChange = {this.handleChange} />
                        Password:
                        <input type="password" className="form-control" name="password" value={password} placeholder="Enter your password" onChange = {this.handleChange} />
                        <button type="submit" className="btn btn-light my-3">submit</button>
                    </form>
               </div>
            </div>
        )
    }
}

export default Login
