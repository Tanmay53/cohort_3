import React from 'react';

class Header extends React.Component{
    constructor(){
        super()

    }

    render(){
        return (
            <div>
                {/* Navbar */}
                <div className="container-fluid bg-dark">
                    <div className="row">
                        <div className="col-2">
                            <a href="#"><img id="img1" src="https://www.pvrcinemas.com/assets/images/new_logo.png" /></a>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input type="text" className="form-control bg-dark text-light mt-3" placeholder="search movies and theaters...." />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-group">
                                <select className="form-control bg-dark text-light mt-3">
                                    <option>Delhi NCR</option>
                                    <option>Delhi NCR</option>
                                    <option>Delhi NCR</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                    <div className="row">
                        <div className="col-2"></div>              
                        <div className="col-4">
                            <ul class="nav">
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#"><small>IMAX</small></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#"><small>4DX</small></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#"><small>Play House</small></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#"><small>Gold</small></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#"><small>ONYX</small></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#"><small>D-BOX</small></a>
                                </li>
                                
                                
                            </ul>
                        </div>
                        <div className="col-6">
                        <ul class="nav">
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#"><small>Vikaao</small></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#"><small>Magazine</small></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#"><small>Cinemas</small></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#"><small>Offers</small></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#"><small>Advertise</small></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#"><small>Girft Cards</small></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#"><small>Bulk Bookings</small></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;