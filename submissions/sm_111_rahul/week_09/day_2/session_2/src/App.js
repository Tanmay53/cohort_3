/** @format */
import React, { Component } from 'react';
import "./App.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home.js";
import About from "./components/aboutUs.js";
import Contact from "./components/contact.js";
import Services from "./components/services.js";
import Login from "./components/login.js";
class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <React.Fragment>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div>
              <ul class="navbar-nav mr-auto">
                <li class="nav-item p-2"><Link to="/">Home</Link></li>
                <li class="nav-item p-2"><Link to="/about">About</Link></li>
                <li class="nav-item p-2"><Link to="/contact">Contact</Link></li>
                <li class="nav-item p-2"><Link to="/services">Services</Link></li>
                <li class="nav-item p-2"><Link to="/login">Login</Link></li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/login" component={Login}></Route>
          
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
