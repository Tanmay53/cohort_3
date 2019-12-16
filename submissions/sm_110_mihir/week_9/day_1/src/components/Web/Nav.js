import React from "react";

export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand " href="#">
                    Uber
                </a>
                <button
                    className="navbar-toggler "
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
                    className="collapse navbar-collapse "
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown active">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Products
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <a className="dropdown-item" href="#">
                                    Ride
                                </a>
                                <a className="dropdown-item" href="#">
                                    Drive
                                </a>
                                <a className="dropdown-item" href="#">
                                    Uber Eats
                                </a>
                                <a className="dropdown-item" href="#">
                                    Uber Uber for Business
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    Freight
                                </a>
                            </div>
                        </li>
                        {/* company dropdown */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Company
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <a className="dropdown-item" href="#">
                                    About us
                                </a>
                                <a className="dropdown-item" href="#">
                                    How Uber works
                                </a>
                                <a className="dropdown-item" href="#">
                                    global citizenship
                                </a>
                                <a className="dropdown-item" href="#">
                                    Newsroom
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    Investor relations
                                </a>
                                <a className="dropdown-item" href="#">
                                    Careers
                                </a>
                            </div>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#">
                                Safety
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Help
                            </a>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <label htmlFor="" className="form-control mr-1">
                            <i className="fas fa-globe"></i>
                        </label>
                        <lable className="form-control">EN</lable>
                        <label className="form-control mr-1">
                            <i class="fas fa-user"></i>
                        </label>
                        <label className="text-dark mr-1">Log in</label>
                        <button
                            className="btn btn-dark my-2 my-sm-0 mr-1"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </nav>
        </div>
    );
}
