import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {


    return (
        <div className="border-top">
            <div className="container mt-3 ">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <Link to="/">
                            <img
                                src="/images/logo.png"
                                style={{ height: 30, width: 150 }}
                                alt="company-logo" />
                        </Link>

                        <h5 className="mt-3"><i className="fas fa-phone-alt"></i> +91 80 4040 2020</h5>
                        <small>&copy; 2016 - 2020, Arrow Electronics pvt. Ltd.
                        <br />
                            All rights reserved.
                        </small>
                        <div className="d-flex">
                            <div className="m-2">
                                <a href="#"><i className="fab fa-twitter fa-lg"></i></a>
                            </div>
                            <div className="m-2">
                                <a href="#"><i className="fab fa-facebook-square fa-lg"></i></a>
                            </div>
                            <div className="m-2">
                                <a href="#"><i className="fab fa-instagram fa-lg"></i></a>
                            </div>
                            <div className="m-2">
                                <a href="#"><i className="fab fa-linkedin-in fa-lg"></i></a>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 col-lg-3">
                        <Link className="text-center h5" to="/component/Faq">FAQ</Link>
                    </div>
                    <div className="col-12 col-lg-3">
                        <Link className="text-center h5" to="/component/Career">Career</Link>
                    </div>
                    <div className="col-12 col-lg-3">
                        <Link className="text-center h5" to="/component/Stores">Stores</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Footer;