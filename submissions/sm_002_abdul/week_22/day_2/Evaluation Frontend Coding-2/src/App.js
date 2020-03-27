import React from 'react';
import './App.css';
import {Redirect , Route, Switch} from 'react-router-dom'

import Dashboard from './Components/Dashboard'
import Login from './Components/Login'



class App extends React.Component{
  constructor(){
    super()
    this.state = {
      isLoggedIn:false
    }
  }

  handleLogin = (bool)=>{
    this.setState({
      isLoggedIn:bool
    })
  }
  
  render(){
    console.log("data from provider",this.context)
    return (
      <>
        {
          !this.state.isLoggedIn
          ?
          <Redirect to={{ pathname: "/login" }}/>
          :
          <Redirect to = {{ pathname:"/" }}/>
        }

        <Switch>
          <Route exact path="/" render = {(props)=><Dashboard {...props}/>}/>
          <Route path="/login" render = {(props)=><Login handleLogin={this.handleLogin} {...props}/>}/>
        </Switch>

        
      </>
    )
  }
}

export default App;
