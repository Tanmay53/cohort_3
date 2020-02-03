import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Add from './components/Add'
import Change from './components/Change'
import Home from './components/Home'
import Delete from './components/Delete'
import Mark from './components/Mark'
import Purchased from './components/Purchased'

class Routes extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' render={() => <Dashboard />} />
        <Route path='/add' render={(props) => <Add {...props} />} />
        <Route path='/change/:idx' render={(props) => <Change {...props} />} />
        <Route path='/home' render={(props) => <Home {...props} />} />
        <Route path='/delete/:idx' render={(props) => <Delete {...props} />} />
        <Route path='/mark/:idx' render={(props) => <Mark {...props} />} />
        <Route path='/done' render={() => <Purchased />} />
      </Switch>
    )
  }
}

export default Routes
