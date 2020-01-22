import React from 'react'
import { connect } from 'react-redux'
import { adminlogin } from "../Common/actions"
import { Redirect } from "react-router-dom"

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            islogin: true
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        if (this.state.username == "admin" && this.state.password == "admin") {
            this.props.login()
            this.setState({
                islogin: false
            })
        }
    }
    render() {
        if (this.state.islogin) {
            console.log("heeee");
            return (
                <div className="container">
                    <div className="col-6 offset-3">
                        <label className="col-12">username
                <input className="col-12" name="username" value={this.state.username} onChange={this.handleChange} />
                        </label>
                        <label className="col-12">password
                <input className="col-12" name="password" value={this.state.password} onChange={this.handleChange} />
                        </label>
                        <div className="col-12 text-center" >
                            <button className="btn btn-warning" onClick={this.handleClick}>Submit</button>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            console.log("hiii");
            return (
                <Redirect to="/" />
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        check: state.addReducer.adminlogin
    }

}

const mapDispatchToProps = dispatch => {
    return {
        login: () => (dispatch(adminlogin(true)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
