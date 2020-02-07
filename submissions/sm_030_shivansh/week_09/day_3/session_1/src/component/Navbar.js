import React from 'react';
import { Link } from 'react-router-dom';
import styles from './component.module.css';


const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom navbar-fixed-top">
            <Link className="navbar-brand" to="/">
                <img src='/images/logo.png' className={styles.navbarLogo} alt="company-logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item m-2 mx-3">
                        <Link className="nav-link h5" to="/component/about">About</Link>
                    </li>
                    <li className="nav-item m-2 mx-3">
                        <Link className="nav-link h5" to="/component/stores">Stores</Link>
                    </li>
                    <li className="nav-item m-2 mx-3">
                        <Link className="nav-link h5" to="/component/faq">FAQ</Link>
                    </li>

                    <li className="nav-item dropdown m-2 mx-3">
                        <a className="nav-link btn-secondary rounded-pill dropdown-toggle text-white h5" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Shop by Category
                         </a>

                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/component/categories/mobile">
                                <i className="fas fa-mobile-alt mr-2 fa-lg"></i>Mobile
                            </Link>
                            <Link className="dropdown-item" to="/component/categories/television">
                                <i className="fas fa-tv mr-2"></i>Televisions
                            </Link>
                            <Link className="dropdown-item" to="/component/categories/laptop">
                                <i className="fas fa-laptop mr-2"></i>Laptop
                            </Link>
                            <Link className="dropdown-item" to="/component/categories/accesories">
                                <i className="fas fa-keyboard mr-2"></i>Accessories
                            </Link>
                            <Link className="dropdown-item" to="/component/categories/gaming">
                                <i className="fas fa-gamepad mr-2"></i>Gaming
                            </Link>
                            <Link className="dropdown-item" to="/component/categories/appliance">
                                <i className="fas fa-blender mr-2"></i>Home Appliance
                            </Link>
                        </div>
                    </li>

                    <li class="nav-item m-2">
                        <a class="nav-link" href="#"><i className="far fa-heart fa-lg"></i></a>
                    </li>
                    <li class="nav-item m-2">
                        <Link class="nav-link" to="/component/cart"><i className="fas fa-shopping-cart fa-lg"></i></Link>
                    </li>
                    <li className="nav-item m-2 mx-3">
                        <Link className="nav-link h5" to="/component/login">Login</Link>
                    </li>
                </ul>


            </div>
        </nav>
    )
}


export default Navbar;