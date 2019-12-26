import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <React.Fragment>
            <div className="container-fluid border-bottom">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand" to="/">
                            <img
                                src="https://zerodha.com/static/images/logo.svg"
                                alt=""
                                className="w-25"
                            />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav ml-auto ">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        Home{" "}
                                        <span className="sr-only">
                                            (current)
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/products"
                                        className="nav-link"
                                        href="#"
                                    >
                                        Products
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">
                                        About Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">
                                        Contact
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    );
}
