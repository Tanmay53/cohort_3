import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { login } from "../Actions/actions"

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            isAuth: true,
            userid: "",
            token: "",
            username: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    userdata = () => {
        axios.post('http://localhost:5000/auth/login', { "email": this.state.email, "password": this.state.password })
            .then((res) => {
                console.log(res)
                this.setState({
                    token: res.data.token
                })
                localStorage.setItem("token", res.data.token)
                if (res.data.token != "error") {
                    this.setState({
                        isAuth: false
                    })

                    this.props.dispatch(login(this.state.email))
                    this.props.history.push("/")
                }
            })
            .catch((res) => {
                alert("invalid username or password")
                console.log("error")
            })
    }
    render() {
        console.log(this.props.value, "login")
        // if (!this.state.isAuth) {
        return (
            <div>
                <div className="container">
                    <div className="offset-3"><h3>Login</h3></div>
                    <div className="col-6 offset-3">
                        <div className="col-12 m-2">
                            <label >Email </label>
                        </div>
                        <div className="col-12 m-2">
                            <input className="col-12" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="col-12 m-2">
                            <label >password </label>
                        </div>
                        <div className="col-12 m-2">
                            <input className="col-12" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div className="col-12 m-2 text-center">
                            <button onClick={this.userdata}>Login</button>
                        </div>
                    </div>
                    <div className="text-center">
                        <div>Not a Member? please <Link to="/signup">Signup here</Link></div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    value: state.loginreducer
})
export default connect(mapStateToProps)(Login)
