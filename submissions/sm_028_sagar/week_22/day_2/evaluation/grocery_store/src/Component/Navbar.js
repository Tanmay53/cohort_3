import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../Redux/Actions'

class Navbar extends Component {
    render(){
        console.log(this.props.status)
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg shadow-sm mb-2 navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Grocery</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                           {this.props.status && <li className="nav-item pt-1">
                              <Link className="nav-link" to="/Admin"><span className='font-weight-bold'>Dashboard</span></Link>
                            </li>}
                            <li className="nav-item active">
                                {this.props.status ? <button className='btn btn-sm mt-2 btn-primary shadow-sm' onClick={() => this.props.logout()}>Logout</button>
                                 : <Link className="nav-link" to="/login"> <button className='btn btn-sm mt-2 btn-danger shadow-sm'>Login</button> </Link>}
                            </li>
                            <li className="nav-item pt-1">
                            <Link className="nav-link" to="/register"><span className='font-weight-bold'>Register</span></Link>
                            </li>
                        </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        status : state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        logout : () => dispatch(logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)


