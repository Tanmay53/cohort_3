import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import ShowUsers from './components/ShowUsers'
import AddNew from './components/AddNew'
import UserDetail from './components/UserDetail'
import EditUser from './components/EditUser'
import DeleteUser from './components/DeleteUser'

class Routes extends React.Component {
  render () {
    return (
      <>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/users/listing' />} />
          <Route path='/users/listing' render={() => <ShowUsers />} />
          <Route path='/users/create' render={(props) => <AddNew {...props} />} />
          <Route path='/users/show/:id' render={(props) => <UserDetail {...props} />} />
          <Route path='/users/edit/:id' render={(props) => <EditUser {...props} />} />
          <Route path='/users/delete/:id' render={(props) => <DeleteUser {...props} />} />
        </Switch>
      </>
    )
  }
}

export default Routes
