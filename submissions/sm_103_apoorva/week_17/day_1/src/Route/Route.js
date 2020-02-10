import React from 'react'
import {Route,Switch,Link} from 'react-router-dom'
import Login from '../components/auth/Login'
import Home from '../components/common/Home'
import Orders from '../components/common/Orders'
import Error from '../components/common/Error'
import { connect } from 'react-redux';

function Routes(props)
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"white"}}>
                <h3 className="navbar-brand" >Book Metting Rooms</h3>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item active ml-2">
                            <Link to="/orders">Orders</Link>
                        </li>
                        <li className="nav-item active ml-2">
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="nav-item ml-2">
                            <Link to="/error">Disabled</Link>
                        </li>
                        <li className="nav-item ml-2">
                            {props.token}
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route path="/" exact component = {Home} />
                <Route path="/orders" component  = {Orders} />
                <Route path="/login" component  = {Login} />
                <Route path="/error" component  = {Error} />
            </Switch>
        </div>
    )
}

const mapStateToProps = (state) => ({
    token: state.token
})


export default connect(mapStateToProps)(Routes)