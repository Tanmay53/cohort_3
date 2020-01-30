import React from 'react'
import {Container,Typography, TextField, Box} from '@material-ui/core/'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value 
        })
    }
    login=(e)=>{
        if(this.state.username=='masai' && this.state.password==1234){
            e.preventDefault()
            this.props.loginCallback(true)
            alert('Login Successfull')
        }
        else{
            alert('Login Unsuccessfull !! Please Try Username:masai, Password:1234')
        }
    }

    render(){
        return(
            <div>
                <Container maxWidth="sm" className='shadow'>
                        <Typography variant="h4" component='div' style={{height: '400px' }} >
                            Login Menu
                            <Box className='my-5'>
                            <form className='text-center' onSubmit={this.login}>
                                <TextField fullWidth onChange={this.changeHandler} label='Username' name='username' value={this.state.username} variant="outlined" />
                                <div className='my-5'></div>
                                <TextField fullWidth onChange={this.changeHandler} type='number' label='Password' name='password' value={this.state.password} variant="outlined" />
                                <div className='my-3'></div>
                                <input type='submit' />
                            </form>
                            </Box>
                        </Typography>
                </Container>
            </div>
        )
    }
}

export default Login