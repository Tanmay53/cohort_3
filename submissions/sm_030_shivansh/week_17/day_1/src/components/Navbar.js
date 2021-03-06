import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {


    return (

        <div className="container ">
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                {/* <a classNameName="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item m-2">
                            <Link className="nav-link text-dark btn btn-lg" to="/">Home</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link className="nav-link text-dark btn btn-lg" to="/order">Order</Link>
                        </li>


                    </ul>
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item m-2">
                            <Link className="nav-link text-dark btn btn-lg" to="/register">Register</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link className="nav-link text-dark btn btn-lg" to="/login">Login</Link>
                        </li>


                    </ul>



                </div>
            </nav>
        </div>


    )
}


export default Navbar;