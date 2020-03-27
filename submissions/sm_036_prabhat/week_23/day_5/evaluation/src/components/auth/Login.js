import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from './../../redux/action';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    // Setting Input Value
    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // On Submit Dispatching Login Action
    handelSubmit = (e) => {
        e.preventDefault()
        this.props.loginUser(this.state);
    }

    render() {
        let loginStatus = this.props.loginData.error
        return (
            <div>
                {/* Nav */}
                <div className="container-fluid bg bg-dark">
                    <div className="text-center display-3 p-4 text-white">Admin Login Form</div>
                </div>
                {/* Login Form */}
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="row card mt-5 p-5">

                            <form onSubmit={this.handelSubmit}>

                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name="username" value={this.state.username} onChange={this.handelChange} className="form-control" placeholder="username" required />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" value={this.state.password} onChange={this.handelChange} className="form-control" placeholder="password" required />
                                </div>

                                <button type="submit" className="btn btn-block btn-secondary">Submit</button>

                                <div className="d-flex justify-content-center p-5">
                                    <div>Dont have Account </div>
                                    <Link to='/register'><button className='btn btn-outline-secondary ml-5'>Register</button></Link>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
                <Route render={() => !loginStatus && <Redirect to='/home' />} />

            </div>
        )
    }
}

// Accessing Data from Store
const mapStateToProps = (state) => ({
    loginData: state.loginData
})

// Dispatching Action
const mapDispatchToProps = dispatch => ({
    loginUser: (payload) => dispatch(login(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)