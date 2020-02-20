import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from "react-redux"
import {signOut} from "../redux/Action"

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-primary bg-info">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" href="#">Navbar</Link>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to = "/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/auth/register">Register</Link>
                            </li>
                            {(this.props.token=='')?(<li className="nav-item">
                                <Link className="nav-link" to="/auth/login">Login</Link>
                            </li>):(<><li className="nav-item ml-auto">
                                <Link className="nav-link ml-auto" to="/user">MY Account</Link>
                            </li>
                            <li className="nav-item">
                            <button onClick={()=>this.props.signOut()} className="nav-link btn-danger text-light" >Logout</button>
                        </li></>)}
                            
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    token:state.token
})

const mapDispatchToProps = dispatch => ({
    signOut:()=>dispatch(signOut())
})

export default connect(mapStateToProps,mapDispatchToProps) (Nav)
