import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerAdmin } from "../redux/auth/actions"
 
export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            username: "",
            password: "",
            mobile: "",
            description: ""
        }
        console.log(this.props)
    }

    handleChange = (e) => {
        // console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = async (e) => {
        e.preventDefault()
        console.log(this.state)
        await this.props.register(this.state)
        this.props.history.push("/")
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row mb-5">
                        <div className="col-8 offset-2 bg-light">
                            <div className="text-center">
                                <h1>Register Form</h1>
                            </div>
                            <form id="sendForm">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input  name="name" 
                                            type="text"
                                            value={this.state.name} 
                                            onChange={this.handleChange} 
                                            className="form-control formEle" 
                                            placeholder="Enter Name" 
                                            required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputEmail">Email address</label>
                                    <input  name="email" 
                                            type="email" 
                                            value={this.state.email} 
                                            onChange={this.handleChange} 
                                            className="form-control formEle" 
                                            placeholder="Enter Email Address" 
                                            required />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                        else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPassword">Password</label>
                                    <input  name="password" 
                                            type="password" 
                                            value={this.state.password} 
                                            onChange={this.handleChange} 
                                            className="form-control formEle" 
                                            placeholder="Enter Password" 
                                            required />
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="username">Username</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                            </div>
                                            <input name="username" 
                                                    type="text" 
                                                    value={this.state.username} 
                                                    onChange={this.handleChange} 
                                                    className="form-control formEle" 
                                                    aria-describedby="inputGroupPrepend" 
                                                    required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="phoneNo">Mobile </label>
                                        <input  name="mobile" 
                                                type="text" 
                                                value={this.state.mobile} 
                                                onChange={this.handleChange} 
                                                className="form-control formEle" 
                                                placeholder="Phone No" 
                                                required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea   name="description" 
                                                value={this.state.description} 
                                                onChange={this.handleChange} 
                                                className="form-control formEle" 
                                                rows="3" 
                                                required>
                                    </textarea>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button onClick={this.handleClick} type="submit" className="btn btn-primary">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      isLoggedIn: state.authReducer.isLoggedIn
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
      register: state => dispatch(registerAdmin(state))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Register)
