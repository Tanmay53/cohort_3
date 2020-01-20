import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import {loggingIn} from "../../Redux/actions"
// import store from "../../store"
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux';

 class SignIn extends Component {
    constructor(){
        super()
        this.state={
            inputUser:'',
            inputPassword:'',
        }
    }
    handleChange = (val) => {
        let inp = val.target.value
        this.setState({
            [val.target.name]:inp
        })
    }
    handleSubmit = () => {
      if(this.props.state.authentication.userName === this.state.inputUser
      && this.props.state.authentication.password === this.state.inputPassword){
        this.props.loggingIn()
      }
      else{
        alert('Invalid userName or Password')
      }
    }
  
render(){
 // console.log(this.props)
 if(this.props.state.isAuthenticated ===true){
 return <Redirect to = '/dashboard'/>
 } 
 else {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
            <h1 className="text-center text-info">Sign In Form</h1>
        <form  noValidate onSubmit={(e)=>e.preventDefault()}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="inputUser"
            autoComplete="email"
            autoFocus
            onChange={(e) =>this.handleChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="inputPassword"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => this.handleChange(e)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick ={this.handleSubmit}
          >
            Sign In
          </Button>
        </form>
      </div>
      </Container>
  )};
  }
}

const mapStateToProps = (state) => ({
        state:state
})

const mapDispatchToProps = (dispatch) =>({
  loggingIn:()=>dispatch(loggingIn())
})


export default connect(mapStateToProps,mapDispatchToProps)(SignIn)






