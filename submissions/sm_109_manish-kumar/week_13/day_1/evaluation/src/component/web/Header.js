import React from 'react'

function Header() {
    return (
        <div className = "container-fluid bg-info">
            <div className ="row">
                <div className ="col-4">
                    <nav className="navbar navbar-expand-lg navbar-light bg-info">
                        <img className="navbar-brand img-fluid" src="images.png" />
                    </nav>
                </div>
                <div className = "col-2 bg-info"></div>
                <div className ="col-6">
                    <nav className="navbar navbar-expand-lg navbar-light bg-info mt-4">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ml-4">
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">WHATSAPP WEB </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">FEATURES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">DOWNLOADS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">SECURITY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">EN</a>
                            </li>
                            
                            </ul>
                        </div>
                    </nav>
                </div>    
            </div>
        </div>
    )
}

export default Header
