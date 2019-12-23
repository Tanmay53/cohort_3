import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="bg-secondary">
            <footer className="container p-3 mt-5  pb-5">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className="row">
                            <Link to="/about" className="text-white">
                                About Us
                            </Link>
                        </div>
                        <div className="row">
                            <Link to="/contact" className="text-white">
                                Contact Us
                            </Link>
                        </div>
                        <div className="row">
                            <Link to="/faq" className="text-white">
                                Frequently asked questions
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="row">
                            <Link to="/iPad/cases" className="text-white">
                                iPad cases
                            </Link>
                        </div>
                        <div className="row">
                            <Link to="/iPad/pivot" className="text-white">
                                iPad pivot stand
                            </Link>
                        </div>
                        <div className="row">
                            <Link to="/iPhone/xrCase" className="text-white">
                                iPhone Xr Leather Case
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="row">
                            <Link to="/career" className="text-white">
                                career
                            </Link>
                        </div>
                        <div className="row">
                            <Link to="" className="text-white mr-2">
                                <i class="fab fa-twitter-square"></i>
                            </Link>
                            <Link to="" className="text-white mr-2">
                                <i class="fab fa-facebook-square"></i>{" "}
                            </Link>
                        </div>
                        <div className="row">
                            <Link to="/" className="text-white">
                                Home
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
