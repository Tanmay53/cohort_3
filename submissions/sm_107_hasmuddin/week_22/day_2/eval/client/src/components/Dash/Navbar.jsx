import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux"
function Navbar({ Auth }) {
    return (
        <div className="row bg-light shadow-sm border justify-content-between">
            {Auth.message !== "login Successfull" && <Link to="/register" className="btn btn-danger">Regiter/Login</Link>}
            {Auth.message == "login Successfull" && <p className="text-danger border px-2">{Auth.user.name}</p>}
            {Auth.message == "login Successfull" && <Link className="btn btn-success" to="/add_emp">Add Employee</Link>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state,
        Auth: state.Auth
    }
}
export default connect(mapStateToProps)(Navbar)
