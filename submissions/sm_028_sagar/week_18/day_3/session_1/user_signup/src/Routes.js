import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Signup from './Component/Signup'
import Login from './Component/Login'
import Success from './Component/Success'
import Dashboard from './Component/Dashboard'
import Profile from './Component/Profile'

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={(props) => <Signup  {...props} /> }></Route>
                <Route path='/login' render={(props) => <Login  {...props} /> }></Route>
                <Route path='/dashboard' render={(props) => <Dashboard {...props} />}></Route>
                <Route path='/profile' render={(props) => <Profile {...props} />} />
                <Route path='/success' render ={(props) => <Success {...props} />} />   
            </Switch>
        </div>
    )
}
