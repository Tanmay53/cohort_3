import React from 'react';
import './App.css';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Users from "./components/USERS/Users"
import AddUser from "./components/Add User/AddUser"
function App() {
  return (
    <BrowserRouter>
    <Route path="/" render={()=>{
     return <Redirect to="/users"/>
    }}/>
     <Route exact path="/users" component={Users}/>
     <Route exact path="/create" component={AddUser}/>
    </BrowserRouter>
  );
}

export default App;
