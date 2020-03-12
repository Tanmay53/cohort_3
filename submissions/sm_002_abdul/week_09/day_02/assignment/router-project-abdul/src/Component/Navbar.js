import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

class Navbar extends React.Component{
  render(){
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark py-2 navbar-border">
          <Link className="navbar-brand">
            <Link to='/'>
              <div>
                <img 
                  src="https://cdn.svgporn.com/logos/shopify.svg" 
                  alt="shopify-logo"
                  className="shopify-logo"/>
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
                  <h5>About Us</h5>
                <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item px-2">
                <Link to="/shop" className="nav-link">
                  <h5>Shop</h5>
                </Link>
              </li>

              <li className="nav-item px-2">
                <Link to="/faq" className="nav-link">
                  <h5>FAQ</h5>
                </Link>
              </li>

              <li className="nav-item px-2">
                <Link to="/cart" className="nav-link">
                  <h3><i class="fas fa-shopping-cart"></i></h3>
                </Link>
              </li>
              
            </ul>
            
          </div>
        </nav>
        
      </>
    )
  }
}

export default Navbar