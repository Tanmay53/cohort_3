import React, { Component } from 'react'
import Navbar from '../Navbar'
import { Link, Redirect } from 'react-router-dom'
import { login } from '../../Redux/Actions'
import { connect } from 'react-redux'
import Axios from 'axios'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
           username : '',
           password : '',
           isLogin:false,
           token:''
        }
    }

    handleChange = e =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = async e =>{
        e.preventDefault()
        console.log('submit called')
        let userdata = {
            'username' : this.state.username,
            'password':this.state.password
        }
        // this.props.loginUser(userdata)
        await Axios.post('http://127.0.0.1:5000/auth/login',userdata)
               .then(res => 
                   this.setState({
                       isLogin : res.data.status,
                       token : res.data.token
                    })
                )
               .then(res =>
                    this.state.isLogin ? localStorage.setItem('detail',JSON.stringify({
                        'token':this.state.token,
                        loggedIn:true
                    })) : localStorage.setItem('detail',JSON.stringify({
                        'token':'',
                        loggedIn:false  
                    }))
                )
                .then(res => this.props.login(this.state.isLogin))
               .catch(err => console.log(err))
    }
    

    render(){
        if(this.props.status){
            return <Redirect to ='/admin' />
        }else{
            return (
                <div>
                  <Navbar />
                  <div className='container w-50'>
                    <form className='w-50 mx-auto border rounded mt-3 py-2 px-3' onSubmit={this.handleSubmit}>
                            <h4>Login Page</h4>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Username</label>
                                <input type="text" className="form-control" value={this.state.username} onChange={this.handleChange} id="username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Password</label>
                                <input type="password" className="form-control" value={this.state.password} onChange={this.handleChange} id="password" />
                            </div>
                            <div className="form-group">
                                <button className='btn btn-primary w-100'>Login</button>
                            </div>
                            <div>Not Registered? <Link to='/register'>Register Here</Link></div>
                        </form>
                  </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state =>{
    return {
        status : state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        // loginUser : (data) => dispatch(loginUser)
        login: (status) => dispatch(login(status))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)