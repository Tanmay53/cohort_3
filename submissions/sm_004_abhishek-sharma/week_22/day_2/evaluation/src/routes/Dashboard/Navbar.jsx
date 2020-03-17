import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { LogoutAdmin } from "../../redux/auth/actions"
import { wipe } from "../../redux/admin/actions"

export class NavBar extends Component {
    handleLogout = () => {
        this.props.logout()
        this.props.clear()
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row bg-dark py-3">
                    <div className="col-12 pb-2 col-sm-3 col-md-6 col-lg-9">
                        <Link to="/dash">
                            <button type="button" className="btn btn-primary">
                                Dashboard
                            </button>
                        </Link>
                    </div>
                    <div className="col-12 pb-2 col-sm-3 col-md-3 col-lg-2">
                        <Link to="/dash/add">
                            <button type="button" className="btn btn-warning">
                            ADD EMP
                            </button>
                        </Link>
                    </div>
                    <div className="col-12 pb-2 col-sm-3 col-md-3 col-lg-1">
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
    logout: (payload) => dispatch(LogoutAdmin(payload)),
    clear: () => dispatch(wipe())
  });

export default connect(null, mapDispatchToProps)(NavBar)

