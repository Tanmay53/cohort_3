import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loginUser, saveUsername} from '../Redux/actions'
import { Redirect } from 'react-router-dom'


class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:''
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleLogin = (e) =>{
        e.preventDefault()

        let credentials = {
            "password":this.state.password,
            "username":this.state.username
        }
        console.log('login clicked',(credentials))    
        this.props.postLoginRequest((credentials))
        this.props.saveUsername(this.state.username)
    }

    render(){
       if(this.props.isLoggedIn){
          return  <Redirect to='/dashboard' />
       }else{
            return (
                <div className='row'>
                    <div className='col-6 mx-auto mt-5'>
                        <h3>Login First</h3>
                        <form onSubmit={(e)=>this.handleLogin(e)}>
                            <div className="form-row" >
                                <div className="form-group col-md-6">
                                    <label htmlFor="username">Username</label>
                                    <input onChange={(e)=>this.handleChange(e)} type="text" value={this.state.username} name='username'  className="form-control" id="username" required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="password">Password</label>
                                    <input onChange={(e)=>this.handleChange(e)} type="password" value={this.state.password} name='password' className="form-control" id="password" required/>
                                </div>
                                <div className="form-group">
                                    <button className='btn btn-primary m-1'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )
       }
    }
}

const mapStateToProps = state =>{
    return {
        isLoggedIn:state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch =>{
    return {    
        postLoginRequest: (query)=> dispatch(loginUser(query)),
        saveUsername: (username) => dispatch(saveUsername(username))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)