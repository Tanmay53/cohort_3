 
import React from 'react';
import  { Login } from './components/Login'
import  {Home} from './components/Home'
import Menu from './components/Menu'
import {Register} from './components/Register'
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
         <Route path ="/Register" exact component={Register}></Route>
         <Route path ="/Home" exact component={Home}></Route>         
       </Switch>
     </div>
   </BrowserRouter>
  );
}

export default App;
