import React, { Component } from 'react'
import {  Route, Switch } from 'react-router-dom'
import Login from '../auth/Login'
import Registration from '../auth/Registration'
import Home from '../Home'
import Additem from '../Additem'

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route path='/register' exact component = { Registration } />
                <Route path='/login' component = { Login } />
                <Route path='/home' component = { Home } />
                <Route path='/add' component = { Additem } />
                </Switch>
            </div>
        )
    }
}
