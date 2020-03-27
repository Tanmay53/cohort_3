import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { register } from './../../redux/action';


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            username: '',
            mobile: '',
            description: ''
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
        e.preventDefault();
        this.props.registerUser(this.state);
      
    }

    render() {
        return (
            <div>
                {/* Nav */}
                <div className="container-fluid bg bg-dark">
                    <div className="text-center display-3 p-4 text-white">Admin Registeration Form</div>
                </div>
                {/* Register Form */}
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="row card mt-5 p-5">
                            <form onSubmit={this.handelSubmit}>

                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" value={this.state.name} onChange={this.handelChange} className="form-control" placeholder="Name" />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" name="email" value={this.state.email} onChange={this.handelChange} className="form-control" placeholder="Email" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" value={this.state.password} onChange={this.handelChange} className="form-control" placeholder="password" />
                                </div>

                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name="username" value={this.state.username} onChange={this.handelChange} className="form-control" placeholder="Username" />
                                </div>


                                <div className="form-group">
                                    <label>Mobile</label>
                                    <input type="number" name="mobile" value={this.state.mobile} onChange={this.handelChange} className="form-control" placeholder="Mobile" />
                                </div>

                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name="description" value={this.state.description} onChange={this.handelChange} className="form-control px-5" placeholder="Description" />
                                </div>

                                <button type="submit" className="btn btn-block btn-secondary">Submit</button>

                                <div className="d-flex justify-content-center mt-3">
                                    <Link to='/login'><button className='btn btn-outline-secondary ml-5'>Go to Login</button></Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// Dispatching Action

const mapDispatchToProps = dispatch => ({
    registerUser: (payload) => dispatch(register(payload))
})

export default connect(null,mapDispatchToProps)(Register)