import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { addPost } from "../Redux/action";
import { Link } from "react-router-dom";

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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function AddUserInfo({ addPost }) {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [catagory, setCatagory] = useState("");
  const [details, setDetails] = useState("");

  const submitHandler = e => {
    let date = new Date(Date.now());
    e.preventDefault();
    const post = {
      date,
      title,
      body,
      catagory,
      details,
      comments: []
    };
    addPost(post);
    setTitle("");
    setBody("");
    setDetails("");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Enter Personal Details
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Enter Title"
                autoFocus
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Enter a Message"
                name="email"
                autoComplete="email"
                value={body}
                onChange={e => setBody(e.target.value)}
              />
            </Grid>
            <select
              className="form-control"
              onChange={e => setCatagory(e.target.value)}
            >
              <option disabled selected>
                Enter Topic Type
              </option>
              <option>random</option>
              <option>general</option>
              <option>programming</option>
              <option>algorithm</option>
              <option>suggestions</option>
            </select>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Enter User Details"
                type="message"
                id="password"
                autoComplete="current-password"
                value={details}
                onChange={e => setDetails(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitHandler}
          >
            Add Personal Info
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/showpost">
                <button className="btn btn-info">View Posts</button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addPost: item => dispatch(addPost(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUserInfo);
