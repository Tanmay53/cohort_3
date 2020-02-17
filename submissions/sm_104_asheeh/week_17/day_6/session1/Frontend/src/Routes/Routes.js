import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import ErrorPage from '../Components/ErrorPage'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Signup from '../Components/Signup'

export default class Routes extends Component {
    render() {
        return (
            <div>
                <div className = "container-fluid bg-dark p-3">
                    <Link to = "/" className = "ml-4 text-white">Home</Link>
                    <Link to = "/auth/login" className = "ml-4 text-white">Login</Link>
                    <Link to = "/auth/signup" className = "ml-4 text-white">Signup</Link>
                </div>
                <Switch>
                    <Route exact path = "/" component = {Home} />
                    <Route exact path = "/auth/login" component = {Login} />
                    <Route exact path = "/auth/signup" component = {Signup} />
                    <Route component = {ErrorPage} />
                </Switch>
            </div>
        )
    }
}
