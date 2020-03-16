import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import Dashboard from './views/Dashboard'
import Summary from './views/Summary'


export default function Router(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/summary" component={Summary} />
                <Route render={<h2>404 ! Resource Not Found.</h2>} />
            </Switch>
        </div>
    )
}