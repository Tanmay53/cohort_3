import React, { Component } from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerUser } from '../../Redux/Actions'
import Axios from 'axios'

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : '',
            password : '',
            type:''
        }
    }

    handleChange = e =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleType = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = async e =>{
        e.preventDefault()
        let newUser = {
            'username':this.state.username,
            'password':this.state.password,
            'type':this.state.type
        }
    
        console.log(newUser)
        // this.props.registerUser()
        await Axios.post('http://127.0.0.1:5000/auth/signup',newUser)
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                <Navbar />
                <div className='container w-50'>
                   <form className='w-50 mx-auto border rounded mt-3 py-2 px-3' onSubmit={this.handleSubmit}>
                        <h4>Register</h4>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" value={this.state.username} onChange={this.handleChange} id="username" />
                            <small>Please keep unique username</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" value={this.state.password} onChange={this.handleChange} id="password" />
                        </div>
                        <div className="form-group form-check">
                            <input type="radio" className="form-check-input" name='type' onClick={this.handleType} id="user" value='user' />
                            <label className="form-check-label"  htmlFor="user">User</label> <br/>
                            <input type="radio" className="form-check-input" name='type' id="admin" onClick={this.handleType} value='admin' />
                            <label className="form-check-label" htmlFor="admin">Admin</label>
                        </div>
                        <div className="form-group">
                            <button className='btn btn-primary w-100'>Register</button>
                        </div>
                        <div>Not Registered? <Link to='/login'>Login</Link></div>
                    </form>
               </div>
            </div>
        )
    }
}

// const mapDispatchToProps = dispatch =>{
//     return {
//         registerUser : (data) => (dispatch(registerUser(data)))
//     }
// }

// export default connect(null,mapDispatchToProps)(Register)