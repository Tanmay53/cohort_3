import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { registerUser } from "../redux/auth/actions"

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: "",
            email: "",
            username: "",
            password: "",
            mobile: "",
            description: ""
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleClick = async (e) => {
        e.preventDefault()
        console.log(this.state)
        await this.props.register(this.state)
        this.handleReset()
    }

    handleReset = () => {
        this.setState({
            name: "",
            email: "",
            username: "",
            password: "",
            mobile: "",
            description: ""
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="row my-4">
                    <div className="col-5 offset-3 border border-secondary bg-light">
                        <div className="row mt-4">
                            <div className="col-4">
                                <Link to="/">
                                    <button className="btn btn-danger">Back</button>
                                </Link>
                            </div>
                            <div className="col-8">
                                <h1>REGISTER</h1>
                            </div>
                        </div>
                        <form>
                            {/* Name */}
                            <div className="row mt-4">
                                <div className="col-12 text-center">
                                    <h4>Name</h4>
                                </div>
                                <div className="col-12 text-center">
                                    <input  type="text"
                                            className="shadow"
                                            name="name"
                                            value={this.state.name} 
                                            onChange={this.handleChange}
                                            placeholder="Enter Name" 
                                            required />
                                </div>
                            </div>
                            {/* Email */}
                            <div className="row mt-4">
                                <div className="col-12 text-center">
                                    <h4>Email Address</h4>
                                </div>
                                <div className="col-12 text-center">
                                    <input  type="email"
                                            className="shadow"
                                            name="email"
                                            value={this.state.email} 
                                            onChange={this.handleChange}
                                            placeholder="Enter Email" 
                                            required />
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
                                            value={this.state.password} 
                                            onChange={this.handleChange}
                                            placeholder="Enter Password" 
                                            required />
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
                                            value={this.state.username}
                                            onChange={this.handleChange}
                                            placeholder="Enter Username" 
                                            required />
                                </div>
                            </div>
                            {/* Mobile */}
                            <div className="row mt-4">
                                <div className="col-12 text-center">
                                    <h4>Mobile</h4>
                                </div>
                                <div className="col-12 text-center">
                                    <input  type="text"
                                            className="shadow"
                                            name="mobile"
                                            value={this.state.mobile}
                                            onChange={this.handleChange}
                                            placeholder="Enter Mobile No" 
                                            required />
                                </div>
                            </div>
                            {/* Description */}
                            <div className="row mt-4">
                                <div className="col-12 text-center">
                                    <h4>Description</h4>
                                </div>
                                <div className="col-12 text-center">
                                    <textarea   name="description" 
                                                className="shadow" 
                                                value={this.state.description} 
                                                onChange={this.handleChange} 
                                                placeholder="Enter Description" 
                                                rows="3" 
                                                required>
                                    </textarea>
                                </div>
                            </div>
                            {/* Register */}
                            <div className="row my-4">
                                <div className="col-12 text-center">
                                    <button className="btn btn-success"
                                            onClick={this.handleClick}>
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
     register: payload => dispatch(registerUser(payload))
})

export default connect(null, mapDispatchToProps)(Register)
