import React from 'react'
import './Auth.css'
import { Container, Typography, Paper, TextField,Box, Button,styles } from '@material-ui/core'
import { checkAuth } from './../../reducer/action'
import { connect } from 'react-redux';
import { Redirect, Route, Link } from "react-router-dom";
import Dashboard from './../Dashboard';

class Auth extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username : "",
            password : "",
        
        }
    }

    handelChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        let logStatus = this.props.dummy
        if(logStatus !== true)
        return (
            <Container>
                <Typography variant="h2" align="center">Login</Typography>
                <Paper elevation ={10}>
                        <TextField  name="username" value={this.state.username} onChange={this.handelChange} label="Username" variant="outlined" />
                        <br></br>
                        <TextField  name="password" value={this.state.password} onChange={this.handelChange} label="Password" variant="outlined" />
                        <br></br>
                        <Link to="/dashboard">

                        <Button variant="outlined" onClick= {()=>this.props.checkAuth(this.state)}>Submit</Button>
                        </Link>
                </Paper>
            </Container>
        )
        else 
        return(
            <React.Fragment>
                <Route to="/Dashboard" render={()=> <Dashboard></Dashboard>} ></Route>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    dummy : state.isLogin
})

const mapDispatchToProps = dispatch => {
    return {
        checkAuth : (data) => dispatch(checkAuth(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)