import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

const token = localStorage.getItem("token")


const PrivateRoute = ({ component: Component, Auth, ...rest }) => {
    return (
        <Route {...rest} render={(props) => {
            if (Auth.isLoggedIn || token) {
                return <Component />
            }
            else {
                return <Redirect to="/login" />
            }
        }} />
    )
}
const mapStateToProps = (state) => {
    return {
        Auth: state.Auth
    }
}

export default connect(mapStateToProps)(PrivateRoute)
