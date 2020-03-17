import React from 'react';
import  { Login } from './components/Login'
import  {Home} from './components/Home'
import Menu from './components/Menu'
import {Signup} from './components/Signup'
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
     <div>
     <Menu />
       <Switch>
         <Route path ="/Login" exact component={Login}></Route>
         <Route path ="/Signup" exact component={Signup}></Route>
         <Route path ="/Home" exact component={Home}></Route>         
       </Switch>
     </div>
   </BrowserRouter>
  );
}

export default App;
