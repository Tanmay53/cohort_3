import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AllUsers from './AllUsers';

function Routes() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/users/listing' render={() => <AllUsers />} />
        <Route path='/' render={() => <Redirect to='/users/listing' />} />
      </Switch>
    </React.Fragment>
  );
}

export default Routes;
