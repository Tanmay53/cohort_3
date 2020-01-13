import React from 'react';
import './App.css';
import About from './practice/About'
import Home from './practice/Home'
import Contact from './practice/Contact'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom';
import Fullstack from "./practice/Fullstack"
import Android from "./practice/Android"
import Login from './practice/Login'
import Services from './practice/Services'


export default class App extends React.Component
{
  render()
  {
    return(
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"black"}}>
          
            <ul className="nav">
                <li className="nav-item">
                  <Link className="m-2 p-4 text-white" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="m-2 p-4 text-white" to="/about">about</Link>
                </li>
                <li className="nav-item">
                  <Link className="m-2 p-4 text-white" to="/contact">contact</Link>
                </li>
                <li className= "nav-item">
                  <div className="dropdown mb-2">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</button>
                    <div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                      <div>
                        <Link to="/course/fullstack" className="text-white ml-2">Full Stack</Link>
                      </div>
                      <div>
                        <Link to="/course/android" className="text-white ml-2">Android</Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="m-2 p-4 text-white" to="/services">services</Link>
                </li>
              </ul>
              <button className = "btn btn-dark btn-outline-info ml-auto">
                <Link className="p-2 text-white" to="/login">Login</Link>
              </button>
        </nav>
        <h1 className="text-center">Masai School Blog</h1>
        <Route path = "/home" exact component = {Home} />
        <Route path = "/about" exact component = {About} />
        <Route path = "/contact" exact component = {Contact} />
        <Route path = "/course/fullstack" component = {Fullstack} />
        <Route path = "/course/android" component = {Android} />
        <Route path = "/services" component = {Services} />
        <Route path = "/login" component = {Login} />
      </React.Fragment>
    )
  }
};
