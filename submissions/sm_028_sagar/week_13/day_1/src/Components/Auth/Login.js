import React,{Component} from 'react'
import {Box,Container,Input,TextField,Button,Typography,FormHelperText} from '@material-ui/core'
import {connect} from 'react-redux'
import { render } from '@testing-library/react'
import { checkLogin } from '../../Redux/actions'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:''
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleLoginSubmit = () =>{
        let credentials = {
            username:this.state.username,
            password:this.state.password
        }
        this.props.loginSubmit(credentials)
        console.log('clicked')

    }

    render(){
        if(this.props.isLoggedIn){
            return <Redirect to='/dashboard' />
        }else{
            return (
                <div>
                    <Container maxWidth='sm'>
                        <Box m={2}>
                            <Typography m={2} variant="h5">Login</Typography>
                        </Box>
                        <Box m={2}>
                             <TextField name='username' id="standard-secondary" type='text' value={this.state.username} onChange={(e)=>this.handleChange(e)} label="Username" color="primary" fullWidth/>
                        </Box>
                        <Box m={2}>
                             <TextField name='password' id="standard-secondary" type='password' value={this.state.password} onChange={(e)=>this.handleChange(e)} label="Password" color="primary" fullWidth/>
                        </Box>
                        <Box m={2}>
                            <Button variant='contained' color='primary' onClick={this.handleLoginSubmit}>Sign In</Button>
                        </Box>
                        {this.props.helperText && <Box m={2}>
                                <FormHelperText>{this.props.helperText}</FormHelperText>
                        </Box>}
                    </Container>
                </div>
            )
        }
    }
}


const mapStateToProps = (state) =>{
    return {
        helperText : state.helperText,
        isLoggedIn : state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        loginSubmit : (input) => dispatch(checkLogin(input))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)