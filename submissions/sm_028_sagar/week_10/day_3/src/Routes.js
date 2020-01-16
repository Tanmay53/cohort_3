import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Registration from './Components/Registration'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'

export default function Routes() {
    return (
        <Switch>
          <Route exact path='/' render ={ (props) => <Registration {...props} />} />
          <Route exact path='/login' render ={ (props) => <Login {...props} />} />
          <Route exact path='/dashboard' render={() => <Dashboard />} />
        </Switch>
    )
}
