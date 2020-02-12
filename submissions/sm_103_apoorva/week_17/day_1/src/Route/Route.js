import React from 'react'
import {Route,Switch,Link} from 'react-router-dom'
import Login from '../components/auth/Login'
import Home from '../components/common/Home'
import Orders from '../components/common/Orders'
import Error from '../components/common/Error'
import Confirm from '../components/common/Confirm'
import { connect } from 'react-redux';
import { signout } from '../Redux/Action'

function Routes(props)
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"white"}}>
                <h3 className="navbar-brand" >Book Meeting Rooms</h3>
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
                <button className="btn btn-info float-right" onClick={()=> props.signout(false)}>Sign Out</button>
            </nav>
            <Switch>
                <Route path="/" exact component = {Home} />
                <Route exact path="/orders" component  = {Orders} />
                <Route path ="/orders/confirm" exact component = {(props) => <Confirm {...props} />} />
                <Route path="/login" component  = {Login} />
                <Route path="/error" component  = {Error} />
            </Switch>
        </div>
    )
}

const mapStateToProps = (state) => ({
    token: state.token
})

const mapDispatchToProps = (dispatch) => ({
    signout : (payload) => (dispatch(signout(payload))),
})

export default connect(mapStateToProps,mapDispatchToProps)(Routes)