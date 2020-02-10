import React from 'react'
import {Link, BrowserRouter as Router} from "react-router-dom"
import "./comp.css"

function Navbar() {
    return (
        <div className= "tophead">
            <u className="ulitem">
                <Router>
                <li className="list"><Link to="/">Home</Link> </li>
                <li className="list"><Link to="/order">Order</Link></li>
                </Router>
            </u>
        </div>
    )
}

export default Navbar
