import React, { Component } from 'react'
import { Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import Dashboard from './components/Dashboard'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      isAuth: false
    }
  }
  handleclick = () => {
    this.handleSubmit();
  }
  handleSubmit = () => {
    this.setState({
      isAuth: !this.state.isAuth
    })
  }

  render() {
    console.log(this.state.isAuth)
    if (this.state.isAuth) {
      return (
        <React.Fragment>
          <Redirect to="/Dashboard" />
        </React.Fragment>
      )
    }
    else {
      return (
        <React.Fragment>
          <div class="m-5 box">
            <label>EMAIL:</label><br></br>
            <input type="text" value={this.state.name} name="email" placeholder="Your Name" /><br></br>
            <label>PASSWORD:</label><br></br>
            <input type="text" value={this.state.name} name="password" placeholder="Your Password" /><br></br>
            <button class="ml-5 mt-3 bg-dark text-white" onClick={this.handleclick}>Submit</button>
          </div>
        </React.Fragment>
      )
    }
  }
}

