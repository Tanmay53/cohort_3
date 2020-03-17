import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import Dashboard from './views/Dashboard'
import Employee from './views/Employee'
import Department from './views/Department'


export default function Router(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/employee" component={Employee} />
                <Route exact path="/department" component={Department} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route render={<h2>404 ! Resource Not Found.</h2>} />
            </Switch>
        </div>
    )
}