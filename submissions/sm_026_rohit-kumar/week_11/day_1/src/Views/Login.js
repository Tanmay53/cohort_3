import React, { useReducer } from 'react'
import {connect} from 'react-redux'
import {userLoginAction} from '../Redux/Actions/Action'


class Login extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLogin = () => {
        this.props.userLoginAction(this.state, this.props)
        //console.log(this.props.userLoginAction)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-8 offset-2'>
                        <h4>Please login before continuing ...</h4>
                    </div>
                </div>
                <div className='row mt-2'>
                    <div className='col-8 offset-2'>
                        <input name='username' value={this.state.username} onChange={this.handleChange} type='text' className='form-control' placeholder='Enter Username'></input>
                        <input name='password' value={this.state.password} onChange={this.handleChange} type='password' className='form-control mt-2' placeholder='Enter Password'></input>
                        <button onClick={this.handleLogin} className='btn btn-outline-primary form-control mt-2'>Login</button>
                    </div>
                </div>
            </div>
        )
    }
}


 const mapStateToProps = (state) => {
    return {
        login: state.login
    }
} 

const mapDispatchToProps = (dispatch) => {
   return {
        userLoginAction: (state, props) => dispatch(userLoginAction(state, props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)