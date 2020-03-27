import React from 'react'
import { signupUser } from '../../redux/actions'
import { connect } from 'react-redux'

class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {name, email, password} = this.state
    this.props.signupUser({name, email, password})
  }

  render () {
    return (
      <div className='container mt-5 mx-auto justify-content-center'>
        <form className='col-lg-6 col-md-8 col-sm-11 col-11 mx-auto' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>
              Name
            </label>
            <input type='text' id='name' value={this.state.name} onChange={this.handleChange} className='form-control' required />
          </div>
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
            <button type='submit' className='btn btn-info'>Signup</button>
          </div>
        </form>
        {this.props.message && <h3 className='text-center text-info'>{this.props.message}</h3>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  message: state.signupMessage
})

const mapDispatchToProps = dispatch => ({
  signupUser: (data) => dispatch(signupUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
