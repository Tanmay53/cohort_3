import React, { Component } from 'react'
import { connect } from "react-redux"
import { logincheck } from "./Actions"
import { Redirect } from "react-router-dom"
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


const styles = ({
    input: {
        margin: "5px"
    }
})

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            isLogedin: false
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        if (this.state.username == "admin" && this.state.password == "admin") {
            this.props.dispatch(logincheck(true))
            this.setState({
                isLogedin: !this.state.isLogedin
            })
        }
    }
    render() {
        if (this.state.isLogedin) {
            return (
                <Redirect to="/" />
            )
        }
        else {
            return (
                <>
                    <Container maxWidth="sm">
                        <Grid container justify="center">
                            <Grid item xs={12}>
                                <TextField variant="outlined" label="username" fullWidth name="username" style={styles.input} value={this.state.username} onChange={this.handleChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined" label="password" fullWidth name="password" style={styles.input} value={this.state.password} onChange={this.handleChange} />
                            </Grid>
                            <Grid container justify="center" xs={12}>
                                <Button onClick={this.handleClick}>Login</Button>
                            </Grid>
                        </Grid>
                    </Container>
                </>
            )
        }
    }
}
export default connect()(Login)