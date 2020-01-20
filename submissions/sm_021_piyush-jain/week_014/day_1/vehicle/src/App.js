import React from 'react';
import './App.css';
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {log,add} from './components/action'
import Dashboard from './components/Dashboard'
import Add from './components/Add'
import Table from './components/Table'
import Edit from './components/Edit'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
    console.log(props)
  }
  handleClick=()=>{
        this.props.log()
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() {
    if (this.props.login) {
      return (
        <React.Fragment>
          <div>
            <Redirect to="/Dashboard"></Redirect>
            <Route path="/Dashboard" component={Dashboard}></Route>
            <Route path="/add" exact render={props=><Add {...props}/>}></Route>
            <Route path="/Table" exact render={props=><Table {...props}/>}></Route>
            <Route path="/Table/:id" exact render={props=><Edit {...props}/>}></Route>
          </div>
        </React.Fragment>
      )
    }
    else {
      return (
        <React.Fragment>
          <div>
            <div>
              <label>Username:</label>
              <input type="text" name="user" value={this.state.name} placeholder="Enter the Username" onChange={this.handleChange}></input>
              <label>Password:</label>
              <input type="text" name="password" value={this.state.password} placeholder="Enter the Password" onChange={this.handleChange}></input>
              <button onClick={this.handleClick}>Submit</button>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}


const mapStateToProps = (state) => ({
  login: state.isAuth
})

const mapDispatchToProps = dispatch => {
  return ({
    log: () => dispatch(log())
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
