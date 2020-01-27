import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { store } from "../../Redux/store";
import { Redirect } from "react-router-dom";
import { addUser } from "../../Redux/UserAction";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: "",
      cibil: "",
      amt: "",
      type: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      name: "",
      age: "",
      email: "",
      cibil: "",
      amt: "",
      type: ""
    });
  };

  render() {
    let isAuth = store.getState().auth.isAuth;
    if (isAuth) {
      return (
        <Container component="main" maxWidth="xs">
          <div className="">
            <Typography component="h1" variant="h5" className="text-center">
              Add Users
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
                label="Age"
                type="number"
                id="password"
                autoComplete="current-password"
                onChange={e => this.setState({ age: e.target.value })}
                value={this.state.age}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={e => this.setState({ email: e.target.value })}
                value={this.state.email}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Cibil Score"
                type="number"
                id="password"
                autoComplete="current-password"
                onChange={e => this.setState({ cibil: e.target.value })}
                value={this.state.cibil}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Loan Amount"
                name="email"
                type="number"
                autoFocus
                onChange={e => this.setState({ amt: e.target.value })}
                value={this.state.amt}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="loan type"
                type="text"
                id="password"
                onChange={e => this.setState({ type: e.target.value })}
                value={this.state.type}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className=""
                onClick={this.handleSubmit}
              >
                Add Info
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item></Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}></Box>
        </Container>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = state => ({
  isUser: state.isAuth
});

const mapDispatchToProps = dispatch => ({
  addUser: item => dispatch(addUser(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
