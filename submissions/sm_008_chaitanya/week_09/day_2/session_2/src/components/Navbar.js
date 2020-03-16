import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <div className="container-fluid jumbotron-fluid sticky-top bg-light">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand ml-3" to="/">
                        <img src="https://www.91springboard.com/wp-content/uploads/2019/08/mob_logo_3x.png" alt="logo"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto small font-weight-bold">
                                <li className="nav-item active pt-2 dropdown">
                                    <a className="nav-link" href="#">LOCATIONS & PRICING 
                                <span className="pl-1"><i className="fas fa-caret-down"></i></span></a>
                                <div className="dropdown-content">
                                    <div className="d-flex flex-column h6 ml-3">
                                        <span className="mb-3 pt-3">Banglore</span>
                                        <span className="mb-3">Delhi </span>
                                        <span className="mb-3">Gurugram</span>
                                        <span className="mb-3">Goa</span>
                                        <span className="mb-3">Hyderabad</span>
                                        <span className="mb-3">Mumbai</span>
                                        <span className="mb-3">Navi Mumbai</span>
                                        <span className="mb-3">Noida</span>
                                        <span className="mb-3">Pune</span>
                                    </div>
                                </div>
                                </li>
                                <li className="nav-item active pt-2">
                                    <Link className="nav-link" to="/enterprise">ENTERPRISE</Link>
                                </li>
                                <li className="nav-item active pt-2">
                                    <Link className="nav-link" to="/blog">BLOG</Link>
                                </li>
                                <li className="nav-item active pt-2">
                                    <Link className="nav-link" to="/events">EVENTS</Link>
                                </li>
                                <li className="nav-item active pt-2">
                                    <Link className="nav-link" to="/referal">REFERAL</Link>
                                </li>
                                <li className="nav-item active pt-2 dropdown">
                                    <a className="nav-link" href="#">CAREERS
                                    <span className="pl-1"><i className="fas fa-caret-down"></i></span></a>
                                    <div className="dropdown-content">
                                        <div className="d-flex flex-column h6 ml-3">
                                            <span className="mb-3 pt-3">Careers at 91 Springboard</span>
                                            <span className="mb-3">Technology Careers</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item active pt-2">
                                    <Link className="nav-link" to="/contact">CONTACT
                                <span className="pl-1"><i className="fas fa-caret-down"></i></span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/booktour"><button className="btn background"><small className="text-white font-weight-bold">BOOK A TOUR</small></button></Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
          
        )
    }
}
export default Navbar