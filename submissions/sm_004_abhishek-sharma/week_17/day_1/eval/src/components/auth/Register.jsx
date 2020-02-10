import React, { Component } from 'react'
import axios from "axios"

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            email : "",
            password : "",
            username : "",
            mobile : "",
            description : ""
        }
    }

    handleChange = (event) => {
        // console.log(event.target.name, event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = (e) => {
        // e.preventDefault()
        console.log(this.state)

        const requestParam = {
            method: 'post',
            url: 'http://localhost:8080/auth/register',
            params : {
                name : this.state.name, 
                email : this.state.email, 
                password : this.state.password, 
                username : this.state.username, 
                mobile : this.state.mobile, 
                description : this.state.description
            }
        }

        axios(requestParam)
            .then(response => console.log(response))
            .catch(err => console.log(err));

        this.resetInput()
    }

    resetInput = () => {
        this.setState({ 
            name : "",
            email : "",
            password : "",
            username : "",
            mobile : "",
            description : ""
        })
    }
    
    render() {
        return (
            <div className="container mt-3">
                <div className="row mb-5">
                    <div className="col-8 offset-2 bg-light">
                        <div className="text-center">
                            <h1>Register Form</h1>
                        </div>
                        <div >
                            <div className="form-group">
                                <label >Name</label>
                                <input type="text" className="form-control formEle" 
                                        placeholder="Enter Name" required 
                                        name = "name" onChange = {this.handleChange}
                                        value = {this.state.name} />
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control formEle" 
                                        placeholder="Enter Email Address" required 
                                        name = "email" onChange = {this.handleChange}
                                        value = {this.state.email} />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                    else.</small>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control formEle" 
                                        placeholder="Enter Password" required 
                                        name = "password" onChange = {this.handleChange}
                                        value = {this.state.password} />
                            </div>
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label>Username</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                                        </div>
                                        <input type="text" className="form-control formEle" 
                                                aria-describedby="inputGroupPrepend" required 
                                                name = "username" onChange = {this.handleChange}
                                                value = {this.state.username} />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Mobile </label>
                                    <input type="text" className="form-control formEle" 
                                            placeholder="Phone No" required 
                                            name = "mobile" onChange = {this.handleChange}
                                            value = {this.state.mobile} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label >Description</label>
                                <textarea className="form-control formEle" rows="3" required
                                          name = "description" onChange = {this.handleChange}
                                          value = {this.state.description} >
                                </textarea>
                            </div>
                            <div className="text-center">
                                <button onClick = {this.handleClick} type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
