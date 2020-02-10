import React, { Component } from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import Home from '../Components/Common/Home'
import Orders from '../Components/Common/Orders'
import Dashboard from '../Components/Common/Dashboard'
import ErrorPage from '../Components/Common/ErrorPage'
import Login from '../Components/Auth/Login'
import Signup from '../Components/Auth/Signup'
import Booking from '../Components/Common/Booking'
import Confirmation from '../Components/Common/Confirmation'


export default class Routes extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
                <div className = "bg-dark p-3">
                    <Link to = "/" className = "text-white mr-4">Home</Link>
                    <Link to = "/orders" className = "text-white mr-4">Orders</Link>
                    <Link to = "/dashboard" className = "text-white ">Dashboard</Link>
                </div>
                <Switch>
                    <Route exact path = "/" component = {Home} />
                    <Route path = "/booking/:id" render = {props => <Booking {...props} />} />
                    <Route path = "confirm/:id" render = {props => <Confirmation {...props} />} />
                    <Route path = "/orders" component = {Orders} />
                    <Route path = "/dashboard" component = {Dashboard} />
                    <Route path = "/login" component = {Login} />
                    <Route path = "/signup" component = {Signup} />
                    <Route component = {ErrorPage} />
                </Switch>
            </>
        )
    }
}
