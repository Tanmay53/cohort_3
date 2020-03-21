import React, { useState } from "react";
import { connect } from "react-redux";
import { checkUserIsauth } from "../redux/action";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./Login.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        Expanse Manager
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function Login(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const clickHandle = e => {
    e.preventDefault();
    if (email != "" && pass != "") {
      let isAuthObj = {
        email: email,
        pass: pass
      };
      props.checkUserIsauth(isAuthObj);
    } else {
      alert("Fill Input Properly");
    }
    setEmail("");
    setPass("");
  };

  return props.isAuth ? (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <span className="my-text1 display-3 text-success d-inline-block mx-2">
          Sign{" "}
        </span>
        <span className="my-text2 display-3 text-success d-inline-block mx-2">
          In{" "}
        </span>
        <span className="my-text3 display-3 text-success d-inline-block mx-2">
          Successfully
        </span>
      </div>
      <div className="text-center btnAni">
        <Link
          className="btn bg-dark text-white py-2 px-3 text-center mt-5"
          to="/"
        >
          Home
        </Link>
      </div>
    </div>
  ) : (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={pass}
            onChange={e => setPass(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={clickHandle}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/signUp" variant="body2">
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
  );
}
const mapStateToProps = state => ({
  isAuth: state.isAuth
});

const mapDispatchToProps = dispatch => ({
  checkUserIsauth: payload => dispatch(checkUserIsauth(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
