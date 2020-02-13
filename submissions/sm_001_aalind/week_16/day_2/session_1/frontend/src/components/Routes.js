import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AllUsers from './AllUsers';
import AddUser from './AddUser';
import ShowUser from './ShowUser';
import EditUser from './EditUser';

function Routes() {
  return (
    <React.Fragment>
      <Switch>
        <Route
          path='/users/edit/:id'
          render={props => <EditUser {...props} />}
        />
        <Route
          path='/users/show/:id'
          render={props => <ShowUser {...props} />}
        />
        <Route path='/users/create' render={props => <AddUser {...props} />} />
        <Route
          path='/users/listing'
          render={props => <AllUsers {...props} />}
        />
        <Route path='/' render={() => <Redirect to='/users/listing' />} />
      </Switch>
    </React.Fragment>
  );
}

export default Routes;
