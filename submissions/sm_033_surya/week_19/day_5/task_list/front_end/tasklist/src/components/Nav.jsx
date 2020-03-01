import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { logout } from '../redux/Actions'

export class Nav extends Component {
    handleClick = () => {
        this.props.logout()
    }
    render() {
        return (
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                <Link to="/">Home</Link>
                            </div>
                            {this.props.value.login && <div className="col-4">
                                <Link to="/tlists">My Tasklists</Link>
                            </div>}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row d-flex justify-content-end">
                            <div className="col-4">
                                {this.props.value.login && <button className="btn btn-primary">{this.props.value.user}</button>}
                            </div>
                            {this.props.value.login && <div className="col-4">
                                <button className="btn btn-primary" onClick={this.handleClick}>Logout</button>
                            </div>}
                            {!this.props.value.login && <div className="col-4">
                                <Link to="/login">Login</Link>
                            </div>}
                            <div className="col-4">
                                <Link to="/signup">Register</Link>
                                <Link to="/createlist">asdf</Link>

                            </div>
                            {!this.props.value.login && <Redirect to="/" />}
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    value: state.loginreducer

})

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
