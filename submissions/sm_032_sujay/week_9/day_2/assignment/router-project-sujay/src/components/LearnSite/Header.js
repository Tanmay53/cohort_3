import React, { Component } from 'react'

import { Route, Link } from 'react-router-dom';

import About from './About'
import Contact from './Contact'
import Cart from './Cart'
import Products from './Products'
import SignUp from './SignUp'

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-info navbar-fixed">
        
            <Link to="/" className="nav-brand m-2"><img src="data:image/png;base64,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"

              style={{ width: "140px",height:"80px" }} alt="LearnSite" /> </Link>
        


          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav offset-7">
              <li className="nav-item active mt-3">
                <Link className="text-info mx-2" to="/about"> About</Link>
              </li>
              <li className="nav-item mt-3">
                <Link className="text-info mx-2" to="/products">Products</Link>
              </li>
              <li className="nav-item mt-3">
                <Link className="text-info mx-2" to="/contact">Contact</Link>
              </li>

              <li className="nav-item m-1">
                <Link className="text-info" to="/cart">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwZHobZs40eERBhbRCHxOBdFHie6q1iFV-7C_JGrz1y_IwALxs" style={{ width: "100px" }} alt="Cart" />
                </Link>
              </li>

            </ul>
            <button className="btn btn-outline-info m-2 "> <Link className="text-white" to="/signUp">SignUp</Link>

            </button>
          </div>
        </nav>


        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/cart" component={Cart} />


      </React.Fragment>
    )
  }
}
