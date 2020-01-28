import React from 'react';
import './App.css';
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { log, add } from './components/action'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
  handleClick = () => {
    if (this.state.name == "admin" && this.state.password == "admin")
      this.props.log()
     else
     alert("Wrong credentials") 
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    if (this.props.login) {
      return (
        <React.Fragment>
          <div>
            <Redirect to="/"></Redirect>
            <Route path="/" exact component={Dashboard}></Route>
            <Route path="/add" exact render={props => <Add {...props} />}></Route>
            <Route path="/Table" exact render={props => <Table {...props} />}></Route>
            <Route path="/Table/:id" exact render={props=><Edit {...props}/>}></Route>
          </div>
        </React.Fragment>
      )
    }
    else {
      return (
        <React.Fragment>
          <div>
            <div style={{ backgroundColor: "blue", margin: "50px", padding: "50px" }}>
              <h2 style={{ textAlign: "center" }}>WELCOME TO LIBRARY</h2>
              <div style={{textAlign: "center"}}>
              <TextField id="standard-basic" label="NAME" name="name" value={this.state.name} onChange={this.handleChange} /><br></br>
              <TextField id="standard-basic" label="PASSWORD" name="password" value={this.state.password} onChange={this.handleChange} /><br></br>
              <Button variant="contained" color="secondary" onClick={this.handleClick}>Submit</Button>
              </div>
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
