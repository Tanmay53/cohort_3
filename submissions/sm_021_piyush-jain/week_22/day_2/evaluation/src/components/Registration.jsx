import React from 'react'
import axios from "axios"
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { login, logout } from "../redux/action"
class Registration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            name: "",
            email: "",
            number: "",
            password: "",
            reg: 1,
            registered: 1

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = async (e) => {
        // token = this.props.token
        var date = ""
        var temp = 0
        temp = new Date()
        date += temp.getFullYear() + "-";
        date += (temp.getMonth() + 1) + "-";
        date += temp.getDate()
        e.preventDefault()
        await axios({
            method: 'GET',
            url: `http://127.0.0.1:5000/auth/check/${this.state.email}`,
        })
            .then(res => this.setState({
                registered: Number(res.data.value)
            }))

        if (this.state.registered == 1) {
            await axios({
                method: "POST",
                url: "http://127.0.0.1:5000/auth/register",
                data: {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    number: this.state.number,
                    date: date
                }
            })
                .then(this.setState({ reg: 0 }))
        }
    }
    handleReg = () => {
        this.setState({
            reg: 1
        })
    }
    handleSign = () => {
        this.setState({
            reg: 0
        })
    }

    handleLogin = async (e) => {
        e.preventDefault()
        console.log("gone")
        await axios({
            method: 'POST',
            url: "http://127.0.0.1:5000/auth/login",
            data: {
                email: this.state.email,
                password: this.state.password
            }
        })
            .then(res => {
                console.log(res.data.type)
                this.props.login(res.data.token, res.data.type)
            })
    }
    render() {
        console.log(this.state, this.props.status)
        if (this.props.token && this.props.person == "admin") {
            return (
                <React.Fragment>
                    <div>
                        <Redirect to="/home" />
                    </div>
                </React.Fragment>
            )
        }
        else if (this.props.token && this.props.person == "user") {
            return (
                <React.Fragment>
                    <Redirect to="/user"></Redirect>
                </React.Fragment>
            )
        }

        else {
            return (
                <React.Fragment>
                    <h3 class="m-5" style={{ "color": "Tomato", "textAlign": "center" }}>Welcome to ULTRA HIGH</h3>
                    <h5 style={{ "textAlign": "center" }} class="lead mb-5"><i> Press <button onClick={this.handleReg} class="btn btn-success">Register</button> to Sign-up or press <button onClick={this.handleSign} class="btn btn-warning">Sign-in</button> to enter the <span class="text-info lead">ULTRA HIGH</span></i></h5>
                    <div style={{ "marginLeft": "26%", "width": "50%" }} class="shadow-lg p-3 mb-5 bg-white rounded">
                        {this.state.reg == 1 ?
                            <div>
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Name</label>
                                        <input type="text" name="name" class="form-control" id="exampleInputPassword1" placeholder="Enter Name" onChange={this.handleChange} />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Number</label>
                                        <input type="text" name="number" class="form-control" id="exampleInputPassword1" placeholder="Phone No" onChange={this.handleChange} />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange} />
                                    </div>
                                    <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                                </form>
                            </div>
                            :
                            <div>
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                                    </div>
                                    <button type="submit" class="btn btn-primary" onClick={this.handleLogin}>Login</button>
                                </form>
                            </div>
                        }
                    </div>
                </React.Fragment>
            )
        }
    }
}
const mapStateToProps = (state) => ({
    status: state.login,
    token: state.token,
    person: state.person

})

const mapDispatchToProps = dispatch => {
    return ({
        login: (data, data2) => dispatch(login(data, data2))
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration)

