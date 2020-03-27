import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../redux/actions'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {email, password} = this.state
    this.props.loginUser({email: email, password: password})
  }

  render () {
    return (
      <div className='container mt-5 mx-auto justify-content-center'>
        <form className='col-lg-6 col-md-8 col-sm-11 col-11 mx-auto' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>
              Email
            </label>
            <input type='email' id='email' value={this.state.email} onChange={this.handleChange} className='form-control' required />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>
              Password
            </label>
            <input type='password' id='password' value={this.state.password} onChange={this.handleChange} className='form-control' required />
          </div>
          <div className='d-flex justify-content-center'>
            <button type='submit' className='btn btn-info'>Login</button>
          </div>
        </form>
        {this.props.loginMessage && <h3 className='text-info text-center'>{this.props.loginMessage}</h3>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loginMessage: state.loginMessage
})

const mapDispatchToProps = (dispatch) => ({
  loginUser: (data) => dispatch(loginUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
