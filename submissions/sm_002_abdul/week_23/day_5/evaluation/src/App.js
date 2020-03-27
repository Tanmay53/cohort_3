import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom"

import Playlist from './Pages/Playlist'
import Login from './Pages/Login'
import store from './store/store'

class App extends React.Component{
  render(){
    const {login} = store.getState()

    //console.log("login response from store",login)
    
    return (
      <>
        {
          !(login)
          ?
          <Redirect to={{ pathname: "/login" }}/>
          :
          <Redirect to = {{ pathname:"/" }}/>
        }

        <Switch>
          <Route exact path="/" render = {(props)=><Playlist {...props}/>}/>
          <Route path="/login" render = {(props)=><Login {...props}/>}/>
        </Switch>
        
      </>
    )
  }
}

export default App;
