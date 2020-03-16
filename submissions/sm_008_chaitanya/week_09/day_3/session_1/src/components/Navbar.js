import React from 'react'
import {Link} from 'react-router-dom'
class Navbar extends React.Component{
    render(){
        return(
            <div className="container-fluid bg-secondary">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand" to="/">
                            <img src="https://www.moengage.com/assets/img/bigbasket-logo.png" alt="logo" height="40"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                              <Link className="nav-link text-light h5 font-weight-bold mr-4" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link text-light h5 font-weight-bold mr-4" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link text-light h5 font-weight-bold mr-4" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link text-light h5 font-weight-bold mr-4" to="/products">Products</Link>
                            </li>
                            <Link className="nav-link h5 mr-4 pt-2" to="/cart">
                              <span className="text-light h4"><i className="fas fa-shopping-cart"></i> cart</span>
                            </Link>
                          </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
export default Navbar