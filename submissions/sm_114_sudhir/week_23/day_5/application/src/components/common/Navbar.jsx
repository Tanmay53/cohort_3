import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutAdminRequest } from '../../redux/authentication/action'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const classes = useStyles();

  const logoutAdmin = () => {
    props.logoutAdmin()
    let user = localStorage.getItem('user')
    if (user) {
      localStorage.removeItem('user')
    }
  }

  // console.log(props.isAuth)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Grocery App
          </Typography>
          <Link to="/register">
            <Button className="text-white" color="inherit">Register</Button>
          </Link>
          <Link to="/addproduct">
            <Button className="text-white" color="inherit">Add Products</Button>
          </Link>
          {!props.isAuth ? 
            (<Link to="/login">
              <Button className="text-white" color="inherit">Login</Button>
            </Link>): 
            (
              <Button onClick={logoutAdmin} className="text-white" color="inherit">Logout</Button>
            )
          } 
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth
})

const mapDispatchToProps = dispatch => ({
  logoutAdmin: () => dispatch(logoutAdminRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
