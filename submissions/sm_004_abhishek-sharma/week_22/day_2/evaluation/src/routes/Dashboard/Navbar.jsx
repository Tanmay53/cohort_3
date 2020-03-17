import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { LogoutAdmin } from "../../redux/auth/actions"

export class NavBar extends Component {
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
                                    onClick = {this.props.logout}
                                    className="btn btn-danger">
                                LOGOUT
                            </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    logout: (payload) => dispatch(LogoutAdmin(payload))
  });

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

