import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getsignup } from '../Redux/actions'

export class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            mobile: "",
            isadmin: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        console.log("hello")
        if (this.state.username != "" && this.state.password != "") {
            let temp = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                mobile: this.state.mobile,
                isadmin: this.state.isadmin || false
            }
            this.props.getsignup("POST", "http://localhost:5000/auth/register", temp)
        }
        else {
            alert("please required fields")
        }
    }

    render() {
        console.log(this.state)
        return (
            <div className="container ">
                <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 offset-xl-3 offset-lg-3 offset-md-0 offset-sm-0">
                    <div className="row text-center">
                        <div className="col-12 text-left">
                            <label>Username</label>
                        </div>
                        <div className="col-12">
                            <input className="col-12 form-control" name="username" value={this.state.username} type="text" required onChange={this.handleChange} />
                        </div>
                        <div className="col-12 text-left">
                            <label>Email</label>
                        </div>
                        <div className="col-12">
                            <input name="email" className="col-12 form-control" value={this.state.email} type="text" required onChange={this.handleChange} />
                        </div>
                        <div className="col-12 text-left">
                            <label>Password</label>
                        </div>
                        <div className="col-12">
                            <input type="password" className="col-12 form-control" name="password" value={this.state.password} required onChange={this.handleChange} />
                        </div>
                        <div className="col-12 text-left">
                            <label>Mobile</label>
                        </div>
                        <div className="col-12">
                            <input type="text" className="col-12 form-control" name="mobile" value={this.state.mobile} required onChange={this.handleChange} />
                        </div>
                        <div className="col-12">
                            <select className="col-12 btn btn-danger mt-4" name="isadmin" value={this.state.isadmin} required onChange={this.handleChange}>
                                <option>select usertype</option>
                                <option value="false">User</option>
                                <option value="true" >Admin</option>
                            </select>
                        </div>
                        <div className="col-12 mt-5">
                            <button className="btn btn-success" onClick={this.handleClick}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispacth => ({
    getsignup: (M, U, D) => dispacth(getsignup(M, U, D))
})

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
