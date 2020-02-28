import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { checkIsLoggedIn ,signOut} from "../redux/Action"

class Nav extends Component {
    componentDidMount() {
        this.props.checkIsLoggedIn()
    }

    render() {
        return (
            <div >
                <nav class="mb-1 navbar navbar-expand-lg navbar-dark purple lighten-2">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
                        aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link className="nav-link" to = "/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            {(this.props.token=="")?(<li class="nav-item">
                                <Link className="nav-link" to="/auth/register">Register</Link>
                            </li>):''}
                            
                        </ul>
                        {(this.props.token != "") ? (<ul class="navbar-nav ml-auto nav-flex-icons">
                            <li class="nav-item avatar  my-auto">
                                <Link class="nav-link p-0" to="/user">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="rounded-circle z-depth-0 my-auto mx-4"
                                        alt="avatar image" height="45" />
                                </Link>
                            </li>
                            <li class="nav-item avatar">
                                        <button onClick={this.props.signOut} className="btn btn-danger">Logout</button>
                            </li>
                        </ul>) :
                            (
                                <ul class="navbar-nav ml-auto nax-flex-icons">
                                    <li class="nav-item">
                                         <Link className="nav-link" to="/auth/login">Login</Link>
                                    </li>
                                </ul>
                            )
                        }
                    </div>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    ...state,
    token: state.token
})

const mapDispatchToProps = dispatch => ({
    checkIsLoggedIn: () => dispatch(checkIsLoggedIn()),
    signOut :()=>dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
