import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img className='brand d-inline-block align-top' src="https://zerodha.com/static/images/logo.svg" alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to = "/" className="nav-item nav-link active">Home</Link>
                        <Link to = "/about" className="nav-item nav-link active">About</Link>
                        <Link to = "/products" className="nav-item nav-link active">Products</Link>
                        <Link to = "/signup" className="btn btn-primary btn-sm nav-item nav-link active text-white">Sign up</Link>
                        
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar