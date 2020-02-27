import React from 'react'
import { Link, Redirect } from "react-router-dom"
import axios from "axios"
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
    componentDidMount = () => {
        axios.get("http://127.0.0.1:5000/auth/count")
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
    handleLog=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleCheck=()=>{
        axios.get(`http://127.0.0.1:5000/auth/login/${this.state.email}/${this.state.password}`)
        .then(res=>localStorage.setItem("token",res.data.token))
    }
    handleClick = async() => {
        this.setState({
            id: this.state.id + 1
        })
        await axios.get(`http://127.0.0.1:5000/auth/check/${this.state.email}`)
        // .then(res=>console.log(res))
            .then(res => this.setState({
                status: Number(res.data)
            }))
        if (this.state.status==0) {
            console.log("value")
            axios.post("http://127.0.0.1:5000/auth/signup", { "id": this.state.id, "name": this.state.name, "number": this.state.number, "email": this.state.email, "password": this.state.password })
                .then(res => console.log(res))
                .then(res=>this.setState({
                    status:1
                }))
        }
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <h3 class="m-5" style={{ "color": "Tomato", "textAlign": "center" }}>Welcome to ULTRA HIGH</h3>
                <h5 style={{ "textAlign": "center" }} class="lead mb-5"><i> Press <button onClick={this.handleReg} class="btn btn-success">Register</button> to Sign-up or press <button onClick={this.handleSign} class="btn btn-warning">Sign-in</button> to enter the DIRECTORY</i></h5>
                <div style={{ "marginLeft": "26%", "width": "50%" }} class="shadow-lg p-3 mb-5 bg-white rounded">
                    {this.state.reg == 1 ?
                        <div>
                            <div style={{ "textAlign": "center" }}>REGISTER</div>
                            <label>NAME</label><br></br>
                            <input style={{ "width": "100%" }} type="text" name="name" onChange={this.handleChange}></input><br></br>
                            <label>EMAIL</label><br></br>
                            <input style={{ "width": "100%" }} type="text" name="email" onChange={this.handleChange}></input><br></br>
                            <label>NUMBER</label><br></br>
                            <input style={{ "width": "100%" }} type="text" name="number" onChange={this.handleChange}></input><br></br>
                            <label>PASSWORD</label><br></br>
                            <input style={{ "width": "100%" }} type="password" name="password" onChange={this.handleChange}></input><br></br>
                            <button onClick={this.handleClick} class="btn btn-dark mt-2" style={{ "color": "white", "marginLeft": "40%" }}>Register</button>
                        </div>
                        :
                        <div>
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

export default Home