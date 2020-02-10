import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            data : ''
           
        }
    }

    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault()
       
        const requestParam = {
            method: 'POST',
            url: 'http://localhost:8080/auth/login',
            // headers: 'application/json; charset=utf-8',
            data: {
                password: this.state.password,
                username: this.state.username
            }
        }
    
        axios(requestParam)
            .then(res => 
                // const data = res;
                console.log(res)
                // this.setState({
                //     data: data
                // });
            )
            .catch(error => console.log(error))
    }

render() {
    console.log(this.state)
    return (
        <div>
            <div className="container">
                <div className="text-center h1">Login Form</div>
                <div className="d-flex justify-content-center">
                    <div className="row p-5">

                        <form onSubmit={this.handelSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" name="username" value={this.state.username} onChange={this.handelChange} className="form-control" placeholder="username" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="text" name="password" value={this.state.password} onChange={this.handelChange} className="form-control" placeholder="password" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>

                            <div className="d-flex justify-content-center p-5">
                                <div>Dont have Account </div>
                                <Link to='/register'><button className='ml-5'>Register</button></Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        )
    }
}

