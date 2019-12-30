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
                                src="https://cdn.shopify.com/s/files/1/0173/8828/files/Proper_Logo_280x_2x_240x240_6b887461-1064-47c5-a958-b6e5a5726d97_280x@2x.png?v=1532311943"
                                alt=""
                                className="w-50"
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
                                <li class="nav-item dropdown">
                                    <Link
                                        to="/iPad"
                                        class="nav-link dropdown-toggle"
                                        id="navbarDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        iPad
                                    </Link>
                                    <div
                                        class="dropdown-menu"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <Link to="/iPad" class="dropdown-item">
                                            Show All
                                        </Link>
                                        <Link
                                            to="/iPad/cases"
                                            class="dropdown-item"
                                        >
                                            Connect iPad Case
                                        </Link>
                                        <Link
                                            to="/iPad/strap"
                                            class="dropdown-item"
                                        >
                                            iPad shoulder strap
                                        </Link>
                                        <div class="dropdown-divider"></div>
                                        <Link
                                            to="/iPad/pivot"
                                            class="dropdown-item"
                                        >
                                            iPad pivot stand
                                        </Link>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    <Link
                                        to="/iPhone"
                                        class="nav-link dropdown-toggle"
                                        id="navbarDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        iPhone
                                    </Link>
                                    <div
                                        class="dropdown-menu"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <Link
                                            to="/iPhone"
                                            class="dropdown-item"
                                        >
                                            Show All
                                        </Link>
                                        <Link
                                            to="/iPhone/xrCase"
                                            class="dropdown-item"
                                        >
                                            iPhone Xr Leather Case
                                        </Link>
                                        <Link
                                            to="/iPhone/XsCase"
                                            class="dropdown-item"
                                        >
                                            iPhone Xs Leather Case
                                        </Link>
                                        <div class="dropdown-divider"></div>
                                        <Link
                                            to="/iPhone/guard"
                                            class="dropdown-item"
                                        >
                                            iPhone Glass Guard
                                            <span class="badge badge-pill badge-primary">
                                                New
                                            </span>
                                        </Link>
                                    </div>
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
                                    <Link to="/faq" className="nav-link">
                                        FAQ
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">
                                        <i class="fas fa-cart-plus"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    );
}
