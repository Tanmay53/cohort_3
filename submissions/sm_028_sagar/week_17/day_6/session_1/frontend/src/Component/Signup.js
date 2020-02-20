import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            password:'',
            email:'',
            resText:''
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
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }
        axios.post('http://127.0.0.1:5000/auth/signup',newUser)
            // .then(res => console.log(res.data))
            .then(res => this.setState({
                resText:res.data
            }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='container mt-5'>
                <form className='w-75 mx-auto' onSubmit={this.handleSubmit}>
                    <h3>User Details</h3>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" value={this.state.name} onChange={this.handleChange} className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type='password' value={this.state.password} onChange={this.handleChange} className="form-control" id="password" ></input>
                    </div>
                    {this.state.resText && <div className='text-danger m-2'>{this.state.resText}</div>}
                    <button className='btn btn-primary' >
                        Submit
                    </button>
                    <br />
                    <Link to='/login'>Login Page</Link>
                </form>
            </div>
        )
    }
}
