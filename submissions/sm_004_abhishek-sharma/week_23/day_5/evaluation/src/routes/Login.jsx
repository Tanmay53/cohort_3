import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from "react-router-dom";
import { loginUser } from "../redux/auth/actions"

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleLogin = async (e) => {
        e.preventDefault()
        await this.props.login(this.state)
        this.props.history.push("/dash")
    }
    
    render() {
        const { isAuth } = this.props;
        return isAuth ?  
            (
            <Redirect to="/dash" />
            ) : (
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-5 offset-3 border border-secondary bg-light">
                            <div className="row mt-4">
                                <div className="col text-center">
                                    <h1>LOG IN</h1>
                                </div>
                            </div>
                            {/* Username */}
                            <div className="row mt-4">
                                <div className="col-12 text-center">
                                    <h4>Username</h4>
                                </div>
                                <div className="col-12 text-center">
                                    <input  type="text"
                                            className="shadow"
                                            name="username"
                                            placeholder="Enter Username"
                                            onChange={this.handleChange} />
                                </div>
                            </div>
                            {/* Password */}
                            <div className="row mt-4">
                                <div className="col-12 text-center">
                                    <h4>Password</h4>
                                </div>
                                <div className="col-12 text-center">
                                    <input  type="password"
                                            className="shadow"
                                            name="password"
                                            placeholder="Enter Password"
                                            onChange={this.handleChange} />
                                </div>
                            </div>
                            {/* Submit */}
                            <div className="row my-4">
                                <div className="col-12 text-center">
                                    <button onClick={this.handleLogin} className="btn btn-success">Submit</button>
                                </div>
                            </div>
                            {/* Sign Up */}
                            <div className="row mt-4">
                                <div className="col-8 offset-4 text-center">
                                    <p>Don't have an account? 
                                        <Link to="/register">Sign Up</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuth: state.authReducer.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
    login: payload => dispatch(loginUser(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
