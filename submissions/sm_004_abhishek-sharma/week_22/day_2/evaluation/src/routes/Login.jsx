import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from "react-router-dom";
import { loginAdmin } from "../redux/auth/actions"
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = async (e) => {
        // console.log(this.props)
        e.preventDefault()
        await this.props.login(this.state)
        // console.log(this.props.isAuth)
        this.props.history.push("/dash")
    }
    render() {
        if(this.props.isAuth){
            return <Redirect to="/dash" />
        }
        else{
        return (
            <React.Fragment>
                <div className="container-fluid">
                <div className="row my-5 ">
                    <div className="col-8 col-sm-6 col-lg-4 offset-1 offset-sm-2 offset-md-4 p-5 rounded border border-dark">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="mt-3 font-weight-bold">Login</h1>
                                <label className = "mt-3"><h5 className = "font-weight-bold">Username</h5></label>
                                <input name="username" onChange={this.handleChange} value={this.state.username} className="form-control shadow" type="text"></input>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-6">
                            <label><h5 className = "font-weight-bold">Password</h5></label>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-12">
                                <input name="password" onChange={this.handleChange} value={this.state.password} className="form-control shadow" type="password"></input>
                            </div>
                        </div>
                        <div className = "row mt-3">
                            <div className = "col-6">
                                <button onClick={this.handleLogin} className="btn btn-danger btn-lg btn-block">Sign in</button>
                            </div>
                            <div className = "col-6">
                                <Link to="/register">
                                    <button className="btn btn-primary btn-lg btn-block">Register</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )}
    }
}

const mapStateToProps = state => {
    return {
      isAuth: state.authReducer.isLoggedIn
    };
  };

const mapDispatchToProps = dispatch => ({
  login: (payload) => dispatch(loginAdmin(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
