import React from 'react';
import './App.css';
// import uuid1 from 'uuid/v4';
import About from './components/About'
import Products from './components/Products'
import Pricing from './components/Pricing'
import Signup from './components/Signup'
import Home from './components/Home'
import {Route,
        Link,     
        } from 'react-router-dom'

export default class App extends React.Component{

  render(){
    return(
      <>
  <nav class="navbar sticky-top shadow-sm navbar-expand-lg navbar-light bg-white justify-content-between">
  <Link className="ml-3 navbar-brand" to="/"><img style={{height:"20px"}} src="https://zerodha.com/static/images/logo.svg"  alt=""/></Link>
  <div class="" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item mx-3">
      <Link className="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item mx-3">
      <Link className="nav-link" to="/about">About</Link>
      </li>
      <li class="nav-item mx-3">
        <Link className="nav-link" to="/pricing">Pricing</Link>
      </li>
      <li class="nav-item mx-3">
      <Link className="nav-link" to="/products">Products</Link>
      </li>
      <li class="nav-item mx-3 mr-3">
      <Link className="nav-link" to="/signup">Sign Up</Link>
      </li>
    </ul>
  </div>
</nav>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/about"><About /></Route>
      <Route exact path="/pricing"><Pricing /></Route>
      <Route exact path="/products"><Products /></Route>
      <Route exact path="/signup"><Signup /></Route>
      </>
    )
  }

}