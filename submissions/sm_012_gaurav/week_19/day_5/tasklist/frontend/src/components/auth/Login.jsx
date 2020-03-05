import React from 'react'
import axios from 'axios'
import { loginUser } from '../../redux/actions'
import { connect } from 'react-redux'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
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

  handleLogin = (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: 'http://127.0.0.1:5000/auth/login',
      data: this.state
    }).then(res => {
      if (!res.data.error) {
        localStorage.setItem('token',res.data.token)
        this.props.loginUser()
      }
      else {
        this.setState({
          message: res.data.message
        })
      }
    })
  }

  render () {
    return (
      <div className='container mx-auto mt-5 d-flex justify-content-center'>
        <div className='col-6'>
          <form onSubmit={this.handleLogin}>
            <label htmlFor='email'>Email</label>
            <input type='email' className='form-control' value={this.state.email} onChange={this.handleChange} id='email' required />
            <label htmlFor='password'>Password</label>
            <input type='password' className='form-control' value={this.state.password} onChange={this.handleChange} id='password' required />
            <div className='d-flex justify-content-center'>
              <button type='submit' className='btn btn-dark mt-2'>Login</button>
            </div>
          </form>
          {this.state.message && <h5 className='text-center text-dark mt-2'>{this.state.message}</h5>}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: () => dispatch(loginUser())
})

export default connect(null, mapDispatchToProps)(Login)
