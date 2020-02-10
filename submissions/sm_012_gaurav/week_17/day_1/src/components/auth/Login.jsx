import React from 'react';
import { connect } from 'react-redux'
import { loginUser, logoutUser } from '../../redux/action'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount () {
      this.props.logoutUser()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value.trim()
        })
    }

    handleClick = (e) => {
      e.preventDefault()
      this.props.loginUser(this.state)
      setTimeout(() => this.props.history.push('/dashboard'), 100)
    }

    render () {
        return (
            <div className = 'container mx-auto mt-5'>
                <form className='col-lg-5 col-md-7 col-sm-9 col-12 mx-auto' onSubmit={this.handleClick}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' placeholder='Enter Username' onChange={this.handleChange} value={this.state.username.trim()} className='form-control' name='username' id='username' required></input>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Enter Password' value={this.state.password.trim()} className='form-control' onChange={this.handleChange} name='password' id='password' required></input>
                    <button type='submit' className='btn btn-outline-success mt-2'>Login</button>
                </form>
                {!this.props.isLogged && <h3 className='text-center'>{this.props.message}</h3>}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
  message: state.message
})

const mapDispatchToProps = (dispatch) => ({
  loginUser: (obj) => dispatch(loginUser(obj)),
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
