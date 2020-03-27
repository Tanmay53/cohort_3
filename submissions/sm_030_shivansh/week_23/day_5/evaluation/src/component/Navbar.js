import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Job Portal
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active mx-3 h5 ">
                                <Link className="nav-link text-dark" to="/">Home
                                   <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item mx-3 h5 ">
                                <Link className="nav-link text-dark" to="/addCompany">Add Company</Link>
                            </li>
                            <li className="nav-item mx-3 h5">
                                <Link className="nav-link  text-dark" to="/addJobs">Add Jobs</Link>
                            </li>

                        </ul>

                    </div>
                </div>

            </nav>
        </>
    )
}


export default Navbar;