import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import axios from 'axios'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            response: true
        }
    }
    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    inputSubmit = (e) => {
        e.preventDefault()
        let postObj = {
            password: this.state.password,
            username: this.state.username
        }
        axios.post('http://localhost:8080/auth/login', postObj)
            .then(response => {
                if (response) {
                    // if (response.data.error === false) {
                    //     this.setState({ response: false })
                    //     alert(response.data.message)
                    // }
                    console.log(response)
                }
            })
            .catch(error => {
                // alert(error.data.message)
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                {this.state.response ?
                (<div className="d-flex align-items-center justify-content-center">
                    <form onSubmit={this.inputSubmit}>
                        <p className="h3 text-center">Login</p>
                        <div className="form-group">
                            <label className="h5">Username</label>
                            <input type="text" name="username" onChange={this.inputChange} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="h5">Password</label>
                            <input type="text" name="password" onChange={this.inputChange} className="form-control" />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-success px-5 mt-3">Login</button>
                        </div>
                        <p>If you don't have an account, for registration
                            <Link to='/register'> Click here</Link>
                        </p>
                    </form>
                </div>
                ) : (<Route path="/home" component={Home} />) }
            </div>
        )
    }
}

export default Login