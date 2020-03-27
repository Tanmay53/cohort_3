import React from 'react'
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import axios from "axios"
import { login, logout } from "../redux/action"
class Home extends React.Component {
    constructor(props) {
        super(props)
        // reg/sign-in-------just to fill structure with either register or sign in page
        this.state = {
            "id": 0,
            "name": "",
            "number": "",
            "email": "",
            "password": "",
            "reg": 1,
            "status": 1

        }
    }
    componentDidMount = async () => {
        await axios.get("http://127.0.0.1:5000/auth/count")
            .then(res => this.setState({
                id: Number(res.data) + 1
            }))
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
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
    handleLog = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleCheck = async () => {
        await axios.get(`http://127.0.0.1:5000/auth/login/${this.state.email}/${this.state.password}`)
            .then(res => this.props.login(res.data.token)
            )
    }
    handleClick = async () => {
        this.setState({
            id: this.state.id + 1,
            reg: 0
        })
        await axios.get(`http://127.0.0.1:5000/auth/check/${this.state.email}`)
            .then(res => this.setState({
                status: Number(res.data)
            }))
        if (this.state.status == 0) {
            axios.post("http://127.0.0.1:5000/auth/signup", { "id": this.state.id, "name": this.state.name, "number": this.state.number, "email": this.state.email, "password": this.state.password })
                .then(res => console.log(res))
                .then(res => this.setState({
                    status: 1
                }))
        }
    }
    render() {
        console.log(this.state, this.props.status)
        if (this.props.token) {
            return (<Redirect to="/blog" />)
        }
        else {
            return (
                <React.Fragment>
                    <h3 class="mt-3 display-4" style={{ "color": "tomato", "textAlign": "center" }}>Welcome to Blogger</h3>
                    <h5 style={{ "textAlign": "center","color":"black" }} class="lead mb-5 "><button onClick={this.handleReg} class="btn btn-success">Register</button><button onClick={this.handleSign} class="btn btn-warning mx-2">Sign-in</button><span class="text-info lead"></span></h5>
                    <div style={{ "marginLeft": "26%", "width": "50%" }} class="shadow-lg p-3 mb-5 bg-white rounded">
                        {this.state.reg == 1 ?
                            <div>
                                <div style={{ "textAlign": "center" }}>REGISTER</div>
                                <label>Name</label><br></br>
                                <input style={{ "width": "100%" }} type="text" name="name" onChange={this.handleChange}></input><br></br>
                                <label>Email</label><br></br>
                                <input style={{ "width": "100%" }} type="text" name="email" onChange={this.handleChange}></input><br></br>
                                <label>Number</label><br></br>
                                <input style={{ "width": "100%" }} type="text" name="number" onChange={this.handleChange}></input><br></br>
                                <label>Password</label><br></br>
                                <input style={{ "width": "100%" }} type="password" name="password" onChange={this.handleChange}></input><br></br>
                               <div class="d-flex justify-content-center"> <button onClick={this.handleClick} class="btn btn-dark mt-2" style={{ "color": "white" }}>Register</button></div>
                            </div>
                            :
                            <div>
                                <div style={{ "textAlign": "center" }}>SIGN-IN</div>
                                <label>Email</label><br></br>
                                <input type="text" style={{ "width": "100%" }} name="email" onChange={this.handleLog} /><br></br>
                                <label>Password</label><br></br>
                                <input type="password" style={{ "width": "100%" }} name="password" onChange={this.handleLog} />
                                <button class="btn btn-dark mt-2" style={{ "color": "white", "marginLeft": "40%" }} onClick={this.handleCheck}>SIGN IN</button>
                            </div>}
                    </div>
                </React.Fragment>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    status: state.login,
    token: state.token
})

const mapDispatchToProps = dispatch => {
    return ({
        login: (data) => dispatch(login(data))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)