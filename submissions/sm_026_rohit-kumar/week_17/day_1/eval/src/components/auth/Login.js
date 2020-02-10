import React from 'react'
import {connect} from 'react-redux'
import {login_user} from '../../redux/Action'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
        // console.log(this.state)
    }

    handleClick = () => {
        this.props.login_user(this.state)
    }

    render() {
        if (this.props.login.isLogin) {
            return <Redirect to='/'></Redirect>
        }

        return (
            <div className='border p-2'>
                <div className='col-12'>
                    <h2 className='p-2 bg-primary text-white'>Login</h2>
                </div>
                <div className='col-12 mt-3'>
                    <input name="username" value={this.state.username} onChange={this.handleChange} type='text' className='form-control' placeholder='Enter Username'></input>
                </div>
                <div className='col-12 mt-2'>
                    <input name="password" value={this.state.password} onChange={this.handleChange} type='password' className='form-control' placeholder='Enter Password'></input>   
                </div>
                <div className='col-12 mt-2'>
                    <button onClick={this.handleClick} className='btn btn-primary'>Login</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login_user: (obj) => dispatch(login_user(obj))
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)