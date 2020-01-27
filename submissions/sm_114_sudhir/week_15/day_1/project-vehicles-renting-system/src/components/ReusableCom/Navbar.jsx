import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    <nav className="navbar navbar-light bg-white fixed-top">
                        <Link to="/" class="navbar-brand">LionsCarRental</Link>
                        <form class="form-inline">
                            <Link to="/" className="mx-4 text-dark">HOME</Link>
                            <Link to="/offers" className="mx-4 text-dark">OFFERS</Link>
                            <Link to="/cars" className="mx-4 text-dark">CARS</Link>
                            <Link to="/location" className="mx-4 text-dark">LOCATION</Link>
                            <Link to="/about" className="mx-4 text-dark">ABOUT</Link>
                            <Link to="/contact" className="mx-4 text-dark">CONTACT</Link>
                            <Link to="/signIn" className="mx-4 text-dark">
                                <button className="btn btn-outline-dark">SIGN IN</button>
                            </Link>
                            <Link to="signUp" className="mx-4 text-dark">
                                <button className="btn btn-outline-dark">SIGN UP</button>
                            </Link>
                        </form>
                    </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
