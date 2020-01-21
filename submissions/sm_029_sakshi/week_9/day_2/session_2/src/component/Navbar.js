import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <Link className="text-dark ml-5" to="/home">Home</Link>
                <Link className="text-dark ml-5" to="/about">About</Link> 
                <Link className="text-dark ml-5" to="/contact">Contact</Link>
                <Link className="text-dark ml-5" to="/service">Service</Link> 
                <Link className="text-dark ml-5" to="/login">Login</Link> 
                </nav>
            </div>
         
        )
    }
}
export default Navbar