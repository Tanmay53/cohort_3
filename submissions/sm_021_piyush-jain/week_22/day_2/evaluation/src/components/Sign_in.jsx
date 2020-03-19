import React from 'react'
import axios from "axios"
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { login, logout } from "../redux/action"

class Sign_in extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    //call to set initial state
    componentDidMount = () => {

    }
    render() {
        console.log(this.state)
        if (this.props.token) {
            return (
                <React.Fragment>
                    <div>hello</div>

                </React.Fragment>
            )
        }

        // if he is not logged in, redirect him to sign-in/sign-up page
        else {
            return (

                <React.Fragment>
                    <Redirect to="/register"></Redirect>
                </React.Fragment>
            )
        }
    }
}
const mapStateToProps = (state) => ({
    status: state.login,
    token: state.token
})

const mapDispatchToProps = dispatch => {
    return ({
        logout: () => dispatch(logout())
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Sign_in)
