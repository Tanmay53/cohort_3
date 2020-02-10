import React, { Component } from 'react'
import axios from 'axios'
import Routes from '../../routes/Routes'
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            clicked : "false"
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = () => {
        console.log("username", this.state.username, " password : ", this.state.password)
        const requestParam = {
            method: 'post',
            url: 'http://localhost:8080/auth/login',
            params : {
                password : this.state.password,
                username :  this.state.username
            }
        }
        console.log(requestParam.url)
        axios(requestParam)
            .then(response => console.log(response))
            .catch(err => console.log(err));

        this.setState({ clicked : "true" })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row my-5 ">
                    <div className="col-12 p-5 rounded border border-dark">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="mt-5 font-weight-bold">Sign in</h1>
                                <label className = "mt-3"><h5 className = "font-weight-bold">Username</h5></label>
                                <input name="username" onChange={this.handleChange} value={this.state.username} className="form-control shadow" type="text"></input>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-6">
                                <label><h5 className = "font-weight-bold">Password</h5></label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input name="password" onChange={this.handleChange} value={this.state.password} className="form-control shadow" type="password"></input>
                            </div>
                        </div>
                        <div className = "row mt-3">
                            <div className = "col-6">
                                <button onClick={this.handleClick} className="btn btn-danger btn-lg btn-block">Sign in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
