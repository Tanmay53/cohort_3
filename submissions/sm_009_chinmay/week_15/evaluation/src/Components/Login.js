import React, { Component } from 'react'
import {TextField, Button, Box} from '@material-ui/core'
import {connect} from 'react-redux'
import {userLogin} from '../Redux/actions'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isLoggedIn: false
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLogin = () => {
        this.props.userLogin(this.state, this.props)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h2>Welcome To Login Page!!</h2>
                
                <Box justifyContent="center">
                    <form noValidate autoComplete="off">
                        <TextField
                            name='username'
                            margin='dense'
                            value={this.state.username} 
                            onChange={this.handleChange}
                            id="outlined-basic" label="Usename" variant="outlined" />
                        <br/>
                        <TextField 
                            name='password'
                            margin='dense'
                            value={this.state.password}
                            onChange={this.handleChange} id="outlined-basic" label="Password" variant="outlined" />
                        <br/>
                        <Button onClick={this.handleLogin} variant="outlined" color="primary">
                            Login
                        </Button>
                    </form>
                </Box>
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
        userLogin: (state, props)=> dispatch(userLogin(state, props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)