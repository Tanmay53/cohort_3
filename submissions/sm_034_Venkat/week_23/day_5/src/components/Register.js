import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Register extends React.Component {
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

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    inputSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/auth/register', this.state)
            .then(response => {
                if (response) {
                    if (response.data.error === true) {
                        alert(response.data.message, " go and login .!")
                    }
                    else {
                        alert(response.data.message, 'Now you can login.!')
                    }
                }
            })
        this.reset()
    }

    reset = () => {
        this.setState({
            name: '',
            email: '',
            password: '',
            username: '',
            mobile: '',
            description: ''
        })
    }
    render() {
        return (
            <div className="d-flex align-items-center justify-content-center">
                <form onSubmit={this.inputSubmit}>
                    <p className="h1 my-4">Registration Form</p>
                    <div className="form-group">
                        <label className="h5">Name</label>
                        <input type="text" name="name" onChange={this.inputChange} value={this.state.name}
                            className="form-control" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label className="h5">Email</label>
                        <input type="text" name="email" onChange={this.inputChange} value={this.state.email}
                            className="form-control" placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                        <label className="h5">Password</label>
                        <input type="text" name="password" onChange={this.inputChange} value={this.state.password}
                            className="form-control" placeholder="Enter Password" />
                    </div>
                    <div className="form-group">
                        <label className="h5">Username</label>
                        <input type="text" name="username" onChange={this.inputChange} value={this.state.username}
                            className="form-control" placeholder="Enter Username" />
                    </div>
                    <div className="form-group">
                        <label className="h5">Mobile</label>
                        <input type="text" name="mobile" onChange={this.inputChange} value={this.state.mobile}
                            className="form-control" placeholder="Enter Mobile" />
                    </div>
                    <div className="form-group">
                        <label className="h5">Description</label>
                        <textarea name="description" onChange={this.inputChange} value={this.state.description}
                            className="form-control" placeholder="Enter Description" rows="3">
                        </textarea>
                    </div>
                    <div className="text-center">
                        <button className="bg-primary my-3 rounded">Register</button>
                    </div>
                    <p className="my-4">
                        If you already have an account,
                        <Link to='/login'> Click here</Link>
                    </p>
                </form>
            </div>
        )
    }
}

export default Register