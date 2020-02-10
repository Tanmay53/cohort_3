import Register from './Register'
import Login from './Login'
import Routes from '../../routes/Routes'
import React, { Component } from 'react'

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin : "false"
        }
    }

    render() {
        return (
            <div className = "container mt-4">
                <div className = "row">
                    <div className = "col-8">
                        <Register />
                    </div>
                    <div className = "col-4">
                        <Login islogged = {this.handleLogin} />
                    </div>
                </div>
            </div>
        )
        
    }
}
