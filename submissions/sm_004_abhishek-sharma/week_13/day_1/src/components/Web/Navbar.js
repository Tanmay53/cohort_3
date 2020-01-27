import React from 'react';
import './Style.css'
class Navbar extends React.Component {
    render() {
        return (
            <div className = "sticky-top">
                <nav className="navbar navbar-expand-lg navbarBg text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 ">
                                <a className="navbar-brand text-white font-weight-bold" href="whatsapp.com"><img className="logo" src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c543.png" alt="logo" />WhatsApp</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            <div className="col-8 mt-2">
                                <div className="row">
                                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                        <ul className="navbar-nav">
                                            <div className="col-2">
                                                <li className="nav-item active">
                                                    <small><a className="nav-link text-white font-weight-bold text-nowrap" href="#">WHATSAPP WEB<span className="sr-only">(current)</span></a></small>
                                                </li>
                                            </div>
                                            <div className="col-2">
                                                <li className="nav-item">
                                                    <small><a className="nav-link text-white font-weight-bold pl-2" href="#">FEATURES</a></small>
                                                </li>
                                            </div>
                                            <div className="col-2">
                                                <li className="nav-item">
                                                    <small><a className="nav-link text-white font-weight-bold" href="#">DOWNLOAD</a></small>
                                                </li>
                                            </div>
                                            <div className="col-2">
                                                <li className="nav-item">
                                                    <small><a className="nav-link text-white font-weight-bold" href="#">SECURITY</a></small>
                                                </li>
                                            </div>
                                            <div className="col-2">
                                                <li className="nav-item">
                                                    <small><a className="nav-link text-white font-weight-bold" href="#">FAQ</a></small>
                                                </li>
                                            </div>
                                            <div className="col-2">
                                                <li className="nav-item dropdown">
                                                    <small>
                                                        <a className="nav-link dropdown-toggle text-white font-weight-bold" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        EN
                                                        </a>
                                                    </small>
                                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}


export default Navbar
