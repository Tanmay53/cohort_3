import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Signup extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          name: '',
          password: '',
          email: '',
          message:''
      }
  }

  handleChange = (e) => {
      if (e.target.id === 'email') {
        this.setState({
            [e.target.id]: e.target.value.toLowerCase(),
            message: ''
        })
      }
      else {
        this.setState({
            [e.target.id]: e.target.value,
            message: ''
        })
      }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: 'http://127.0.0.1:5000/auth/signup',
      data: this.state
    }).then (res => this.setState({message: res.data.message, name: '', email: '', password: ''}))
  }

  render () {
    return (
      <div className='container mx-auto mt-5'>
        <form className='col-6 mx-auto shadow-lg p-5' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' placeholder='Enter Name' className='form-control' value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Enter Email' className='form-control' value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder='Enter Password' className='form-control' value={this.state.password} onChange={this.handleChange} />
          </div>
          <div className = 'd-flex justify-content-around'>
            <Link to='/login'><button className='btn btn-outline-info rounded-0'>Login</button></Link>
            <button type='submit' className='btn btn-outline-info rounded-0'>Signup</button>
          </div>
          {this.state.message && <h1 className='text-center text-info'>{this.state.message}</h1>}
        </form>
      </div>
    )
  }
}

export default Signup
