import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">StoreKeeper</a>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link class="nav-item nav-link" to = '/home'>Home</Link>
                    <Link class="nav-item nav-link" to = '/add'>Add New</Link>
                    <Link class="nav-item nav-link" to = '/done'>Purchased</Link>
                </div>
            </div>


            
        </nav>
    )
}