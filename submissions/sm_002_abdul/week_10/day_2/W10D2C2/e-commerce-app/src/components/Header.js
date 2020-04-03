import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import {connect} from "react-redux"

class Header extends React.Component{
  render(){
    const {cart} = this.props

    return (
      <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark py-2 navbar-border">
          <div className="navbar-brand">
            <Link to='/'>
              <div>
                <img 
                  src="https://cdn.svgporn.com/logos/shopify.svg" 
                  alt="shopify-logo"
                  className="shopify-logo"/>
              </div>
            </Link>
          </div>

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
                  <h5>Home</h5>
                <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item px-2">
                <Link to="/addproducts" className="nav-link">
                  <h5>Add Products</h5>
                </Link>
              </li>

              <li className="nav-item px-2">
                <Link to="/faq" className="nav-link">
                  <h5>FAQs</h5>
                </Link>
              </li>

              <li className="nav-item px-2">
                <Link to="/cart" className="nav-link">
                  <h3><i className={ cart.length>0 ? "ri-shopping-cart-2-fill":"ri-shopping-cart-line"}></i></h3>
                </Link>
              </li>

              <li className="nav-item px-2">
                <Link to="/orders" className="nav-link">
                  <h5>Orders</h5>
                </Link>
              </li>
              
            </ul>
            
          </div>
        </nav>
        
      </>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    cart : state.cart
  }
}

export default connect(mapStateToProps,null)(Header)