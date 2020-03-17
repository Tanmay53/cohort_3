import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Dashboard from '../commons/Dashboard';
import AddProduct from '../products/AddProduct';
import AddCategory from '../products/AddCategory';

function Routes(props) {
  return (
    <React.Fragment>
      <Switch>
        <Route
          path='/addcategory'
          render={routeProps =>
            props.isLogged ? (
              <AddCategory {...routeProps} />
            ) : (
              <Redirect to='/login' />
            )
          }
        />
        <Route
          path='/addproduct'
          render={routeProps =>
            props.isLogged ? (
              <AddProduct {...routeProps} />
            ) : (
              <Redirect to='/login' />
            )
          }
        />
        <Route
          path='/dashboard'
          render={routeProps =>
            props.isLogged ? (
              <Dashboard {...routeProps} />
            ) : (
              <Redirect to='/login' />
            )
          }
        />
        <Route
          path='/register'
          render={routeProps =>
            props.isLogged ? <Redirect to='/' /> : <Register {...routeProps} />
          }
        />
        <Route
          path='/login'
          render={routeProps =>
            props.isLogged ? <Redirect to='/' /> : <Login {...routeProps} />
          }
        />
        <Route
          path='/'
          render={() =>
            props.isLogged ? (
              <Redirect to='/dashboard' />
            ) : (
              <Redirect to='/login' />
            )
          }
        />
      </Switch>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    isLogged: state.isLogged
  };
};

export default connect(mapStateToProps)(Routes);
