import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Grocery Stores</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-dark h5 m-2" to="/login">Login </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark h5 m-2" to="/register">Register</Link>
                        </li>
                    </ul>

                </div>
            </div>

        </nav>
    )
}

export default Navbar
