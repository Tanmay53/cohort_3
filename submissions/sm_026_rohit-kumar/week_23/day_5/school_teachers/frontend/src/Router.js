import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import Dashboard from './views/Dashboard'
import Classes from './views/Classes'
import Section from './views/Section'
import Subject from './views/Subject'
import Teacher from './views/Teacher'


export default function Router(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/class" component={Classes} />
                <Route exact path="/section" component={Section} />
                <Route exact path="/subject" component={Subject} />
                <Route exact path="/teacher" component={Teacher} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route render={<h2>404 ! Resource Not Found.</h2>} />
            </Switch>
        </div>
    )
}