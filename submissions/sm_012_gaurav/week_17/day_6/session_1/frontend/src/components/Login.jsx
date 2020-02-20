import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          password: '',
          email: '',
          message:''
      }
  }

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value,
        message: ''
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: 'http://127.0.0.1:5000/auth/login',
      data: this.state
    }).then (res => this.setState({message: res.data.message, email: '', password: ''}))
  }

  render () {
    return (
      <div className='container mx-auto mt-5'>
        <form className='col-6 mx-auto shadow-lg p-5' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Enter Email' className='form-control' value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder='Enter Password' className='form-control' value={this.state.password} onChange={this.handleChange} />
          </div>
          <div className = 'd-flex justify-content-around'>
            <button type='submit' className='btn btn-outline-info rounded-0'>Login</button>
            <Link to='/'><button className='btn btn-outline-info rounded-0'>Signup</button></Link>
          </div>
          {this.state.message && <h1 className='text-center text-info'>{this.state.message}</h1>}
        </form>
      </div>
    )
  }
}

export default Login