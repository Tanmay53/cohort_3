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

    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault()
        this.props.loginUser(this.state);
    }

    render() {
        let loginStatus = this.props.loginData.error
        return (
            <div>
                <div className="container">
                    <div className="text-center display-3 p-4">Login Form</div>
                    <div className="d-flex justify-content-center">
                        <div className="row p-5">

                            <form onSubmit={this.handelSubmit}>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name="username" value={this.state.username} onChange={this.handelChange} className="form-control" placeholder="username" required />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="text" name="password" value={this.state.password} onChange={this.handelChange} className="form-control" placeholder="password" required />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>

                                <div className="d-flex justify-content-center p-5">
                                    <div>Dont have Account </div>
                                    <Link to='/register'><button className='ml-5'>Register</button></Link>
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

const mapStateToProps = (state) => ({
    loginData: state.loginData
})

const mapDispatchToProps = dispatch => ({
    loginUser: (payload) => dispatch(login(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)