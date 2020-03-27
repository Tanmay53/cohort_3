import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { logoutUser } from "../../redux/auth/actions"
import { empty } from "../../redux/user/actions"

export class NavBar extends Component {
    handleLogout = () => {
        this.props.logout()
        this.props.clear()
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row bg-dark py-3 d-flex ">
                    <div className="col mr-auto ">
                        <Link to="/dash">
                            <button type="button" className="btn btn-primary">
                                Dashboard
                            </button>
                        </Link>
                    </div>
                    <div className="col-2">
                        <Link to="/dash/add">
                            <button type="button" className="btn btn-warning">
                            ADD PRODUCT
                            </button>
                        </Link>
                    </div>
                    <div className="col-2 ">
                        <button type="button" 
                                onClick = {this.handleLogout}
                                className="btn btn-danger">
                            LOGOUT
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser()),
    clear: () => dispatch(empty())
  });

export default connect(null, mapDispatchToProps)(NavBar)

