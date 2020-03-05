import React from 'react'
import Axios from 'axios'

class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      message: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSignup = e => {
    e.preventDefault()
    Axios({
      method: 'post',
      url: 'http://localhost:5000/auth/signup',
      data: this.state
    }).then(res => {
      this.setState({
        message: res.data.message
      })
    }).catch(err => this.setState({ message: err.message }))
  }

  render () {
    return (
      <div className='container mx-auto mt-5 d-flex justify-content-center'>
        <div className='col-6'>
          <form onSubmit={this.handleSignup}>
            <label htmlFor='name'>Name</label>
            <input type='text' className='form-control' value={this.state.name} onChange={this.handleChange} id='name' required />
            <label htmlFor='email'>Email</label>
            <input type='email' className='form-control' value={this.state.email} onChange={this.handleChange} id='email' required />
            <label htmlFor='password'>Password</label>
            <input type='password' className='form-control' value={this.state.password} onChange={this.handleChange} id='password' required />
            <div className='d-flex justify-content-center'>
              <button type='submit' className='btn btn-dark mt-2'>Signup</button>
            </div>
          </form>
          {this.state.message && <h5 className='text-center text-dark mt-2'>{this.state.message}</h5>}
        </div>
      </div>
    )
  }
}

export default Signup
