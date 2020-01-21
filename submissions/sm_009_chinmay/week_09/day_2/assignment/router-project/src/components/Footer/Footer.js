import React from 'react'
import {Link, Route} from 'react-router-dom'
import '../styles/FooterStyle.css'

export default function Footer() {

    return (
        <div>
                <footer className="page-footer font-small bg-dark text-white pt-4">

                    <div className="container text-center text-md-left">

                        <div className="row">

                        <div className="col-md-4 mx-auto">
                            <h5 className="font-weight-bold h3 mt-3 mb-4">Apple India</h5>
                            <p>Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment, and expert device support.</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none" />

                        <div className="col-md-2 mx-auto">

                            <h5 className="font-weight-bold mt-3 mb-4">Explore</h5>

                            <ul className="list-unstyled ">
                                <li>
                                    <Link className='text-white' to='/mac'>Mac</Link>
                                </li>
                                <li>
                                    <Link to='/ipad' className="text-white mt-1">iPad</Link>
                                </li>
                                <li>
                                    <Link to='/iphone' className="text-white mt-1">iPhone</Link>
                                </li>
                                <li>
                                    <Link to='/music' className="text-white mt-1">Music</Link>
                                </li>
                            </ul>

                        </div>

                        <hr className="clearfix w-100 d-md-none" />

                        <div className="col-md-2 mx-auto">

                            <h5 className="font-weight-bold mt-3 mb-4">Services</h5>

                            <ul className="list-unstyled">
                            <li>
                                Apple Music
                            </li>
                            <li>
                                Apple TV+
                            </li>
                            <li>
                                Apple Arcade
                            </li>
                            <li>
                                iCloud
                            </li>
                            </ul>

                        </div>

                        <hr className="clearfix w-100 d-md-none" />

                        <div className="col-md-2 mx-auto">

                            <h5 className="font-weight-bold mt-3 mb-4">About Apple</h5>

                            <ul className="list-unstyled ">
                                <li>
                                    <Link className='text-white' to='/aboutUs'>About Us</Link>
                                </li>
                                <li>
                                    <Link to='/faq' class="text-white mt-1">FAQ</Link>
                                </li>
                                <li>
                                    <Link to='/contactUs' class="text-white mt-1">Contact Us</Link>
                                </li>
                            </ul>
                            
                        </div>

                        </div>

                    </div>

                    <hr/>

                    <div className="text-center">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-google"></a>
                        <a href="#" className="fa fa-linkedin"></a>
                    </div>

                    <div className="footer-copyright text-center py-3 text-white">© 2020 Copyright:
                        <a className='text-white' href="https://mdbootstrap.com/education/bootstrap/"> https://www.apple.com/in/</a>
                    </div>

                </footer>
        </div>
    )
}
