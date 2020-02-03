import React from 'react'
import { Container, Typography, Paper, TextField, Button } from '@material-ui/core'
import { checkAuth } from './../../reducer/action'
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";


const root = {
        marginLeft : "auto",
        marginRight : "auto",
        display : "block",
        padding : 150,
        width : 200
    }
const center = {
    marginLeft : "auto",
    marginRight : "auto",
    display : "block",
    padding : 15,
    marginTop :15
}

class Auth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            
        }
    }
    
    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        let logStatus = this.props.dummy
        if (logStatus !== true)
            return (
                <Container>
                    <Typography variant="h2" align="center">Login</Typography>
                    <Paper elevation={10} style={root}>
                        <TextField name="username" value={this.state.username} onChange={this.handelChange} label="Username" variant="outlined" />
                        <br></br>
                        <TextField style={{marginTop:15}} name="password" value={this.state.password} onChange={this.handelChange} label="Password" variant="outlined" />
                        <br></br>
                        <Button style={center} variant="outlined" onClick={() => this.props.checkAuth(this.state)}>Submit</Button>
                    </Paper>
                </Container>
            )
        else
            return <Redirect to="/dashboard" />
    }
}

const mapStateToProps = (state) => ({
    dummy: state.isLogin 
})

const mapDispatchToProps = dispatch => {
    return {
        checkAuth: (data) => dispatch(checkAuth(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)