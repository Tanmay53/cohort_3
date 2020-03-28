import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Dashboard from './components/common/Dashboard'
import { connect } from 'react-redux'
import AddCompany from './components/common/AddCompany'
import AddJob from './components/common/AddJob'
import EditJob from './components/common/EditJob'

class Routes extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' render={(props) => this.props.isLogged ? <Dashboard {...props} /> : <Login />} />
        <Route path='/signup' render={(props) => this.props.isLogged ? <Redirect to='/' /> : <Signup />} />
        <Route path='/addCompany' render={(props) => this.props.isLogged ? <AddCompany {...props} /> : <Login />} />
        <Route path='/addJob' render={(props) => this.props.isLogged ? <AddJob {...props} /> : <Login />} />
        <Route path='/edit/:jobId' render={(props) => this.props.isLogged ? <EditJob {...props} /> : <Login />} />
      </Switch>
    )
  }
}

const mapStateToProps = state => ({
  isLogged: state.isLogged
})

export default connect(mapStateToProps, null)(Routes)
