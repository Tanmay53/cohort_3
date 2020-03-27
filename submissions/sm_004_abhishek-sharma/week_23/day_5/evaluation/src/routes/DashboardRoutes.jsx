import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import Navbar from "./Dashboard/Navbar";
import Dashboard from "./Dashboard/Dashboard";
import AddProduct from "./Dashboard/AddProduct";
import NoMatch from "./Dashboard/NoMatch";

const DashboardRoutes = props => {
    const { isAuth } = props;
    return isAuth ? (
      <>
        <Route path="/dash" render={() => <Navbar />} />
        <Switch>
          <Route path="/dash" exact render={() => <Dashboard />} />
          <Route path="/dash/add" render={() => <AddProduct />} />
          <Route component={NoMatch} />
        </Switch>
      </>
    ) : (
      <Redirect to="/" />
    );
  };
  
const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isLoggedIn
})

export default connect(mapStateToProps, null)(DashboardRoutes)
