import React, { Component } from 'react'
import { Route, Link, BrowserRouter } from "react-router-dom";
import App from '../App'
import Dashboard from './Dashboard';
import Add from './Add';
import All from './All';
export default class Routes extends Component {
    constructor(props) {
        super(props)
        this.state = {
          isAuth: false,
          email: "",
          password: ""
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
        console.log("called")
        return (
            <React.Fragment>
                <div>
                    <Route path="/" exact render={props=><App  data={this.state} click={this.handleclick} sub={this.handleSubmit}{...props}/>}></Route>
                    <Route path="/Dashboard"exact render={props=><Dashboard data={!this.state.isAuth}{...props}/>}/>
                    <Route path="/addUsers" exact render={props=><Add {...props}/>}/>
                    <Route path="/allUsers"exact component={All}/>
                </div>
            </React.Fragment>
                )
            }
        }
