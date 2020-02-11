import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'
import { connect } from 'react-redux'
import Dashboard from '../components/common/Dashboard'

class Routes extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' render={(props) => this.props.isLogged ? <Redirect to='/dashboard' /> : <Login {...props} />} />
        <Route path='/login' render={(props) => <Login {...props} />} />
        <Route path='/signup' render={(props) => this.props.isLogged ? <Redirect to='/dashboard' /> : <Signup {...props} />} />
        <Route path='/dashboard' render={(props) => this.props.isLogged ? <Dashboard {...props} /> : <Redirect to='/login' />} />
      </Switch>
    )
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.isLogged
})

export default connect(mapStateToProps)(Routes)
