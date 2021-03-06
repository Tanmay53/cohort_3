import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to='/home'>SuperMarket</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to='/add'>Add Item</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to='/done'>Show Purchased</Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}
