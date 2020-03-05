import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import { connect } from 'react-redux'
import Dashboard from './components/common/Dashboard'
import AddTaskList from './components/common/AddTaskList'
import TaskList from './components/common/TaskList'

class Routes extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' render={() => this.props.isLogged ? <Redirect to='/dashboard' /> : <Login />} />
        <Route path='/signup' render={() => this.props.isLogged ? <Redirect to='/dashboard' /> : <Signup />} />
        <Route path='/dashboard' render={() => this.props.isLogged ? <Dashboard /> : <Redirect to='/' />} />
        <Route path='/addtasklist' render={(props) => this.props.isLogged ? <AddTaskList {...props} /> : <Redirect to='/' />} />
        <Route path='/tasklist/:tasklistId' render={(props) => this.props.isLogged ? <TaskList {...props} /> : <Redirect to='/' />} />
      </Switch>
    )
  }
}

const mapStateToProps = state => ({
  isLogged: state.isLogged
})

export default connect(mapStateToProps, null)(Routes)
