import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'

class Routes extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' render={() => <Signup />} />
        <Route path='/login' render={() => <Login />} />
      </Switch>
    )
  }
}

export default Routes
