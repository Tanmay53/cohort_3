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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.registerUser(this.state);
      
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div className="container">
                    <div className="text-center display-4 text-danger p-4">Register Form</div>
                    <div className="d-flex justify-content-center">
                        <div className="row col-8 border border-dark bg-info p-5">

                            <form onSubmit={this.handleSubmit}>

                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" placeholder="Name" />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Email" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="text" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="password" />
                                </div>

                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} className="form-control" placeholder="Username" />
                                </div>


                                <div className="form-group">
                                    <label>Mobile</label>
                                    <input type="number" name="mobile" value={this.state.mobile} onChange={this.handleChange} className="form-control" placeholder="Mobile" />
                                </div>

                                <div className="form-group">
                                    <label>Description</label>
                                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange} className="form-control" placeholder="Description" />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>

                               
                            </form>

                            <div className="d-flex justify-content-center p-5">
                        <Link to='/login'><button className='btn btn-success'> Go to Login</button></Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    registerUser: (payload) => dispatch(register(payload))
})

export default connect(null,mapDispatchToProps)(Register)