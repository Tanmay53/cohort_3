import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { checkAuth } from "../../Redux/UserAction";
import { store } from "../../Redux/store";
import { Redirect } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pass: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    let item = {
      name: this.state.name,
      pass: this.state.pass
    };
    this.props.checkAuth(item);
  };

  render() {
    let isAuth = store.getState().auth.isAuth;
    if (isAuth) {
      return <Redirect path="/" />;
    } else {
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="">
            <Avatar className="">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className="" noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="User Name"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={e => this.setState({ name: e.target.value })}
                value={this.state.name}
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
                onChange={e => this.setState({ pass: e.target.value })}
                value={this.state.pass}
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
                className=""
                onClick={this.handleSubmit}
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
                  <Link href="#" variant="body2">
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
  }
}

const mapStateToProps = state => ({
  isUser: state.auth.isAuth
});

const mapDispatchToProps = dispatch => ({
  checkAuth: item => dispatch(checkAuth(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
