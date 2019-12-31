import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import AddStaff from './common/AddStaff';
import ViewStaff from './common/ViewStaff';
import Notfound from './common/Notfound';
import Login from './auth/Login';
import Main from './common/Main';

class Dashboard extends Component {
  state = {
    isLoggedIn: false
  };

  authenticate = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    return (
      <div className='p-5'>
        <div>
          <Switch>
            <Route path='/' exact component={Main} />
            <Route
              path='/addCustomer'
              exact
              component={() => {
                return this.state.isLoggedIn ? (
                  <AddStaff />
                ) : (
                  <Redirect
                    to={{
                      pathname: '/login'
                    }}
                  />
                );
              }}
            />
            <Route
              path='/viewCustomer'
              exact
              render={() => {
                return this.state.isLoggedIn ? (
                  <ViewStaff />
                ) : (
                  <Redirect
                    to={{
                      pathname: '/login'
                    }}
                  />
                );
              }}
            />
            <Route
              path='/login'
              exact
              component={() => {
                return (
                  <Login
                    authorization={this.authenticate}
                    history={this.props.history}
                  />
                );
              }}
            />
            <Route component={Notfound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;
