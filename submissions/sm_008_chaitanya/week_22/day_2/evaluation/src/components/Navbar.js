import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <div className="container-fluid jumbotron-fluid bg-secondary">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand text-light font-weight-bold" to="/">HOME</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link text-light h5 font-weight-bold pr-5" to="/login">Login</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link text-light h5 font-weight-bold pr-5" to="/signup">SignUp</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link text-light h5 font-weight-bold pr-5" to="/jobopenings">Hiring</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
export default Navbar