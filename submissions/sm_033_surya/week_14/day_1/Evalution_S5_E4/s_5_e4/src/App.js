import React from 'react';
import { Link } from "react-router-dom"
import Router from './Routers/Router';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux"
import { logoutcheck } from "./Components/Common/Actions"
const styles = ({
  btn: {
    margin: "5px"
  }
})
class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  logout = () => {
    this.props.dispatch(logoutcheck(false))

  }
  render() {
    return (
      <>
        <Container maxWidth="sm">
          <Grid container justify="center" >
            <Grid item>
              <Link to="/"><Button style={styles.btn} variant="contained" color="secondary" >Home</Button></Link>
              {this.props.value && <Button variant="contained" style={styles.btn} color="primary" onClick={this.logout}>Logout</Button>}

            </Grid>
          </Grid>
        </Container>
        <Router />
      </>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    value: state.userLogin.login
  }
}
export default connect(mapStateToProps)(App);
