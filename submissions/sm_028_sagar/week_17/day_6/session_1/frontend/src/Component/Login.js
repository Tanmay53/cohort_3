import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : '',
            isLoggedIn : false
        }
    }

    handleChange = e =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault()
        let newUser = {
            email : this.state.email,
            password:this.state.password
        }
        axios.post('http://127.0.0.1:5000/auth/login',newUser)
            .then(res => this.setState({
                isLoggedIn:res.data.status
            }))
            .catch(res => console.log(res))
    }

    render(){
        if (this.state.isLoggedIn) {
            return <Redirect to='/success' />
        }else{
            return (
                <div>
                     <form className='w-75 mx-auto' onSubmit={this.handleSubmit}>
                            <h3>Login Page</h3>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type='password' value={this.state.password} onChange={this.handleChange} className="form-control" id="password" ></input>
                            </div>
                            <button className='btn btn-primary' >
                                Submit
                            </button>
                            <br />
                            <Link to='/'>SignUp</Link>
                        </form>
                </div>
            )
        }
    }
    
}
