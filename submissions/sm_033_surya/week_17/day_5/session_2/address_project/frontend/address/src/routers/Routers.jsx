import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from '../components/Home'
import Create from '../components/Create'
import Addaddress from '../components/Addaddress'
import Edituser from '../components/Edit_user'
import Editaddress from '../components/Edit_address'

export default class Routers extends Component {
    render() {
        return (
            <>
                <Route path="/" exact component={Home} />
                <Route path="/create" exact component={Create} />
                <Route path="/addaddress/:id" exact render={(props) => <Addaddress {...props} />} />
                <Route path="/editaddress/:id" exact render={(props) => <Editaddress {...props} />} />
                <Route path="/edituser/:id" exact render={(props) => <Edituser {...props} />} />
            </>
        )
    }
}
