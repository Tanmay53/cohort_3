import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { registerAdmin } from '../../redux/authentication/action'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Sudhir copyright
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
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


function Register(props) {
  const classes = useStyles();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const register = (e) => {
      e.preventDefault()
      const url ='http://127.0.0.1:5000/register'
      const admin = {
        "email":email,
        "password":password,
        "name": name
      }
      props.registerAdmin(url, admin)
      setName("")
      setEmail("")
      setPassword("")
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
            Register
        </Typography>
        <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value = {name}
                id="name"
                label="Full Name"
                name="name"
                onChange = {(e)=> setName(e.target.value)}
                autoFocus
          />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value = {email}
                id="email"
                label="Email Address"
                name="email"
                onChange = {(e) => setEmail(e.target.value)}
                autoComplete="email"
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                value = {password}
                fullWidth
                onChange = {(e) => setPassword(e.target.value)}
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
            onClick = {(e) => register(e)}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
              <Link to="/login">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
};


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch =>({
  registerAdmin: (url,payload) => dispatch(registerAdmin(url,payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(Register)