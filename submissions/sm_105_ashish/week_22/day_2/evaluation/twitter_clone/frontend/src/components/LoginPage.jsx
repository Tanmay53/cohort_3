import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import {loginUser, checkIsLoggedIn} from "../redux/Action"
import {Redirect} from "react-router-dom"

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Asheesh copyright
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function SignIn(props) {
  const classes = useStyles();
  const [email,setemail]=useState('')
  const [password,setpassword]= useState('')
  useEffect(()=>{
   props.checkIsLoggedIn()
  },[])

  const logMeIn = async (e)=>{
    e.preventDefault()
    const url ='http://127.0.0.1:5000/auth/login'
    const payload ={"email":email,"password":password}
    await props.loginUser(url,{...payload})
      setemail("")
      setpassword('')
  }
  if(!props.isLoggedIn){
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-6" style={{background:"#71C9F8"}}>
          <img  className="m-auto text-center" style ={{width:"140%",height:"80%",overflow:"hidden"}} src="https://www.logolynx.com/images/logolynx/a2/a2676696dd75aaa2f0d7b53bd0e62980.png" alt="logo"/>
        </div>
        <div className="col-6">
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <b>See whats happenning in the world right now</b><br/>
                  Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value = {email}
            id="email"
            label="Email Address"
            name="email"
            onChange = {(e)=>setemail(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          <TextField
           
            variant="outlined"
            margin="normal"
            required
            value = {password}
            fullWidth
            onChange = {(e)=>setpassword(e.target.value)}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            onClick ={(e)=>logMeIn(e)}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='/auth/register' variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
        </div>
      </div>
    </div>
  
    </>
  )}
  else{
    return (<Redirect to="/user"/>)
  }
};


const mapStateToProps = (state) => ({
  token:state.commonReducer.token,
  isLoggedIn:state.commonReducer.isLoggedIn
})

const mapDispatchToProps = dispatch =>({
  loginUser:(url,payload)=>dispatch(loginUser(url,payload)),
  checkIsLoggedIn:()=>dispatch(checkIsLoggedIn())
})

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)