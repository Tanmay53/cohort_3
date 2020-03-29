import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom"

import Playlist from './Pages/Playlist'
import Login from './Pages/Login'
import store from './store/store'

class App extends React.Component{
  render(){
    const {login} = store.getState() 
    
    // here we are destructuring state (login state) which we got from redux store
    // login state in App is maintained by redux store

    return (
      <>
        {
          !(login) /*Redirecting users according using ternary*/
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
