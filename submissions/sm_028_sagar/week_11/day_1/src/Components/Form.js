import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state ={
            username:'',
            password:'' 
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        let credentials = {
            username:this.state.username,
            password:this.state.password
        }
        this.props.onSubmit(credentials)
    }


    render() {
        return (
            <div className='container border mt-5 p-2'>
                <h1>Login Form:</h1>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})} className="form-control" id="username" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
            </div>
        )
    }
}
