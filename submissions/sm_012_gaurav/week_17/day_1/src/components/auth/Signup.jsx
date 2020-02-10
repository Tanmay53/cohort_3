import React from 'react'
import { connect } from 'react-redux'
import { signupUser } from '../../redux/action'

class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
      mobile: '',
      description: ''
    }
  }

  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value.trim()
      })
  }

  handleClick = async (e) => {
    e.preventDefault()
    this.props.signupUser(this.state)
  }

  render () {
    if (this.props.error === false) {
      setTimeout(() => this.props.history.push('/'), 3000)
    }
    return (
      <div className = 'container mx-auto mt-5'>
        <form className='col-lg-5 col-md-7 col-sm-9 col-12 mx-auto' onSubmit={this.handleClick}>
          <label htmlFor='name'>Name</label>
          <input type='text' placeholder='Enter Name' value={this.state.name.trim()} className='form-control' onChange={this.handleChange} name='name' id='name' required />
          <label htmlFor='email'>Email</label>
          <input type='email' placeholder='Enter Email' value={this.state.email.trim()} className='form-control' onChange={this.handleChange} name='email' id='email' required />
          <label htmlFor='username'>Username</label>
          <input type='text' placeholder='Enter Username' value={this.state.username.trim()} className='form-control' onChange={this.handleChange} name='username' id='username' required />
          <label htmlFor='password'>Password</label>
          <input type='password' placeholder='Enter Password' value={this.state.password.trim()} className='form-control' onChange={this.handleChange} name='password' id='password' required />
          <label htmlFor='mobile'>Mobile</label>
          <input type='number' placeholder='Enter Mobile' value={this.state.mobile} className='form-control' onChange={this.handleChange} name='mobile' id='mobile' required />
          <label htmlFor='description'>Description</label>
          <input type='text' placeholder='Enter description' value={this.state.description.trim()} className='form-control' onChange={this.handleChange} name='description' id='description' required />
          <button type='submit' className='btn btn-outline-success mt-2'>Signup</button>
        </form>
        {this.props.message && <h3 className='text-center'>{this.props.message}</h3>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  error: state.signupResponse.error,
  message: state.signupResponse.message
})

const mapDispatchToProps = (dispatch) => ({
  signupUser: (obj) => dispatch(signupUser(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
