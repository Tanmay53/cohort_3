import React from 'react';
import './App.css';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Users from "./components/USERS/Users"

function App() {
  return (
    <BrowserRouter>
    <Route path="/" render={()=>{
     return <Redirect to="/users"/>
    }}/>
     <Route path="/users" component={Users}/>
    </BrowserRouter>
  );
}

export default App;
