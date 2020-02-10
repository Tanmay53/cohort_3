import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { checkLogin } from '../redux/action'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             password : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    } 

    handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            username : this.state.username,
            password : this.state.password
        }
        this.props.checkLogin(data)
    }

    render() {
        return (
            <div className="container p-5 w-25">
                {
                    this.props.isLoggedIn ? 
                    <Redirect to ='/' ></Redirect>
                    :
                    null
                }
                <h1>Login</h1>
                    <label htmlFor="username">Username</label>
                    <input type="text"  name='username' value={this.state.username} onChange={this.handleChange} className="form-control mb-2" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control mb-2" required />
                    <button type="submit" className="btn btn-block btn-info" onClick={this.handleSubmit}>Submit</button>
                    <p>If not registered , register here !</p>
                    <Link to='/register' >Register</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn : state.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
    checkLogin : (payload) => dispatch(checkLogin(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
