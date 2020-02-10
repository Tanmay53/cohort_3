import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/common/Home';
import Register from '../components/common/Register';
import Login from '../components/auth/Login';
import Orders from '../components/common/Orders';
// import NotFound from '../components/common/NotFound';

class Routes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            path='/orders'
            render={props =>
              this.props.isLoggedIn() ? (
                <Orders {...props} />
              ) : (
                <Redirect to='/login' />
              )
            }
          />
          <Route
            path='/login'
            render={props =>
              this.props.isLoggedIn() ? (
                <Redirect to='/home' />
              ) : (
                <Login {...props} {...this.props} />
              )
            }
          />
          <Route
            path='/register'
            render={props =>
              this.props.isLoggedIn() ? (
                <Redirect to='/home' />
              ) : (
                <Register {...props} {...this.props} />
              )
            }
          />
          <Route
            path='/home'
            render={props =>
              this.props.isLoggedIn() ? (
                <Home {...props} all_rooms={this.props.all_rooms} />
              ) : (
                <Redirect to='/login' />
              )
            }
            {...this.props}
          />
          <Route
            path='/'
            render={props =>
              this.props.isLoggedIn() ? (
                <Redirect to='/home' />
              ) : (
                <Redirect to='/login' />
              )
            }
          />
          {/* <Route render={(props) => <NotFound {...props} />} /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;
