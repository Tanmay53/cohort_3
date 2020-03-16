import React from 'react'
import {Link} from 'react-router-dom'
import Routing from './Routing'
import './Navbar.css'


class Navbar extends React.Component{
  render(){
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light py-2 navbar-border">
          <Link className="navbar-brand">
            <Link to='/'>
              <div>
                <img 
                  src="https://zerodha.com/static/images/logo.svg" 
                  alt="zerodha-logo"
                  className="logo-img"/>
              </div>
            </Link>
          </Link>

          <button 
            className="navbar-toggler" 
            type="button" data-toggle="collapse" 
            data-target="#navbarTogglerDemo02" 
            aria-controls="navbarTogglerDemo02" 
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

              <li className="nav-item px-2">
                <Link to="/" className="nav-link">
                  About 
                <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item px-2">
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>

              <li className="nav-item px-2">
                <Link to="/pricing" className="nav-link">
                  Pricing
                </Link>
              </li>

              <li className="nav-item px-2">
                <Link to="/support" className="nav-link">
                  Support
                </Link>
              </li>

              <li className="nav-item px-2">
                <button className="btn btn-primary btm-sm">
                  Sign up
                </button>
              </li>
              
            </ul>
            
          </div>
        </nav>
        <Routing/>
      </>
    )
  }
}

export default Navbar

