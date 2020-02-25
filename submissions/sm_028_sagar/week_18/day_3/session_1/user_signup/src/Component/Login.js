import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : '',
            isLoggedIn : false,
            helperText: '',
            token:''
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
                isLoggedIn:res.data.status,
                helperText:res.data.message,
                token:res.data.token || ''
            }))
            .then(res => 
                    this.state.isLoggedIn ? localStorage.setItem('currentUserToken',this.state.token) : null
                )
            .catch(res => console.log(res))
    }

    render(){
        console.log(this.state.token)
        if (this.state.isLoggedIn) {
            return <Redirect to='/dashboard' />
        }else{
            return (
                <div className='container mt-5'>
                     <form className='w-75 mx-auto' onSubmit={this.handleSubmit}>
                            <h3>Login Page</h3>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="email" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type='password' value={this.state.password} onChange={this.handleChange} className="form-control" id="password" required/>
                            </div>
                            {
                                this.state.helperText && <div className='my-1 text-danger'>
                                    {this.state.helperText}
                                </div>
                            }
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
