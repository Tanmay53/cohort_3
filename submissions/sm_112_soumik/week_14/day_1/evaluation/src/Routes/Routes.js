import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, Route, Switch } from "react-router-dom";
import Home from "../Components/home";
import SignIn from "../Components/login";
import AddInfo from "../Components/AddInfo";
import EnhancedTable from "../Components/EnhancedTable";
import EditList from "../Components/EditList";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className="text-light">
              Home
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/addVehicles" className="text-light">
              Add Vehicles
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/viewVehicles" className="text-light">
              View Vehicles
            </Link>
          </Typography>
          <Link to="/login" className="btn btn-info">
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/addVehicles" component={() => <AddInfo />} />
        <Route
          exact
          path="/viewVehicles"
          component={props => <EnhancedTable {...props} />}
        />
        <Route exact path="/login" component={() => <SignIn />} />
        <Route
          path="/viewVehicles/:id"
          component={props => <EditList {...props} />}
        />
      </Switch>
    </div>
  );
}
export default ButtonAppBar;
