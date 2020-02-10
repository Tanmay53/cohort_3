import React, { Component } from 'react'
import {connect} from 'react-redux'
import {checkUser} from '../../Redux/Action'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: "",
            password: ""
             
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    login = (e) => {
        e.preventDefault();
        const userInfo = {
            username: this.state.username,
            password: this.state.password
            
        }
        this.props.checkUser(userInfo)
    }
    
    render() {
        console.log(this.props)
        if(this.props.isLogin === true) {
           return <Redirect to = "/" />
        } else {
            return (
                <div className = "container mt-4 border border-dark">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Username</label>
                                    <input onChange = {(e) => this.handleChange(e)} name = "username" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input onChange = {(e) => this.handleChange(e)} name = "password" type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <button onClick = {this.login} type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                        <div className="col-4"></div>
                    </div>
                    
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.isLogin,
    state: state
})

const mapDispatchToProps = (dispatch) => ({
    checkUser: (payload) => dispatch(checkUser(payload)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

