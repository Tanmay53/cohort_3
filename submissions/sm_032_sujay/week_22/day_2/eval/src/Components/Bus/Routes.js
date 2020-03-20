

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Dashboard from "./Dashboard"
  import SignUp from "./SignUp"

  import Login from "./Login"
  import Home from "./Home"


  import React, { Component } from 'react'
  
  export default class Routes extends Component {
      render() {
          return (
            
                  <React.Fragment>
                  
        <Route path ='/' component = {Home}/>
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/darshboard" component={Dashboard} />
       
      


      </React.Fragment>
            
              
          )
      }
  }
  