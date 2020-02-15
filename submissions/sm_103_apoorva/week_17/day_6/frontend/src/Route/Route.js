import React from 'react'
import {Switch, Route,Link} from 'react-router-dom'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'

function Routes() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark" >
                <h3 className="navbar-brand text-white" ><Link to="/">Auth</Link></h3>
                <div className=" navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav float-left">
                        <li className="nav-item active ml-2 ">
                            <Link to="/signin" className = "btn btn-info">Sign In</Link>
                        </li>
                        <li className="nav-item active ml-2 ">
                            <Link to="/signup" className = "btn btn-info">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <h1 className="text-center">
                Welcome
            </h1>
            <Switch>
                <Route path="/signin" exact component = {SignIn} />
                <Route path="/signup" exact component = {SignUp} />
            </Switch>
        </div>
    )
}

export default Routes
