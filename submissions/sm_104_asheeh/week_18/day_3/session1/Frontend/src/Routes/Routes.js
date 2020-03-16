import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import ErrorPage from '../Components/ErrorPage'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import Details from '../Components/Details'

export default class Routes extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }

    signOut = (e) => {
        e.preventDefault()
        localStorage.clear()
    }
    
    
    render() {
        console.log(this.state)
        const loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
        return (
            <>
            {
            loginResponse != null ?
            (
                <div className = "container-fluid bg-dark p-3">
                    <Link to = "/" className = "ml-4 text-white">Home</Link>
                    <button className = "justify-content-right" onClick = {this.signOut}>Sign Out</button>
                </div>
                
                
            ) :
            (
                <div className = "container-fluid bg-dark p-3">
                    <Link to = "/" className = "ml-4 text-white">Home</Link>
                    <Link to = "/auth/login" className = "ml-4 text-white">Login</Link>
                    <Link to = "/auth/signup" className = "ml-4 text-white">Signup</Link>
                </div>
            )
            }

                <Switch>
                    <Route exact path = "/" component = {Home} />
                    <Route path = "/auth/login" component = {Login} />
                    <Route path = "/auth/signup" component = {Signup} />
                    <Route path = "/auth/details" component = {Details} />
                    <Route component = {ErrorPage} />
                </Switch>
            </>
        )
    }
}
