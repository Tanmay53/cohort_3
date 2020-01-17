import React from 'react'
// import Loign from "./Common/Login"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        console.log(this.props.isAuth)
        if (this.props.status) {
            return (
                <div>
                    <h1>Welcome Back Admin</h1>
                </div>
            )
        }
        else {
            return (
                <>
                    <Redirect to="/login" />
                </>
            )
        }

    }
}
const mapStateToProps = state => {
    return {
        value: state.addReducer,
        status: state.loginReducer
    }
}
export default connect(mapStateToProps)(Home)