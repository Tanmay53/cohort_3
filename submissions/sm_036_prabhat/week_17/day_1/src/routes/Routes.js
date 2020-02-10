import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './../components/common/Home';
import Order from './../components/common/Order';
import Confirmation from './../components/common/Confirmation';
import Login from './../components/auth/Login';
import Register from './../components/auth/Register';
import PageNotFound from './../components/common/PageNotFound'

export default class Routes extends Component {
    render() {
        return (
            <>
               <Switch>
                    <Route path='/' exact component ={Home} />
                    <Route path='/login' exact component = { Login } />
                    <Route path='/register' component = { Register } />
                    <Route path='/order' component = { Order } />
                    <Route path='/confirmation' component = { Confirmation } />
                    <Route component = {PageNotFound} />
               </Switch>
            
            </>
        )
    }
}
