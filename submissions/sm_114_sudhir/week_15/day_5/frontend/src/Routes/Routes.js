import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import UsersListing from '../components/UsersListings'
// import UsersShow from '../components/UsersShow'
// import UsersEdit from '../components/UsersEdit'
// import UsersDelete from '../components/UsersDelete'
import UserCreate from '../components/UserCreate'


function Routes() {
    return (
        <React.Fragment>
            <Navbar/>
            <Switch>
                <Route exact path = "/" component = {Home} />
                <Route path = "/users/listing" component = {UsersListing} />
                <Route path = "/users/create" component = {UserCreate} />
                {/* <Route path = "/users/show/:id" component = {UsersShow} />
                <Route path = "/users/edit/:id" component = {UsersEdit} />
                <Route path = "/users/delete/:id" component = {UsersDelete} /> */}
            </Switch>
        </React.Fragment>
    )
}

export default Routes
