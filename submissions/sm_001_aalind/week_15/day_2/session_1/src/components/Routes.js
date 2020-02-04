import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import AddItem from './AddItem';
import EditItem from './EditItem';
import DeleteItem from './DeleteItem';
import MarkItem from './MarkItem';

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/mark/:index' render={props => <MarkItem {...props} />} />
        <Route
          path='/change/:index'
          render={props => <EditItem {...props} />}
        />
        <Route
          path='/delete/:index'
          render={props => <DeleteItem {...props} />}
        />
        <Route path='/home' render={() => <Home />} />
        <Route path='/add' render={() => <AddItem />} />
        <Route path='/' render={() => <Redirect to='/home' />} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
