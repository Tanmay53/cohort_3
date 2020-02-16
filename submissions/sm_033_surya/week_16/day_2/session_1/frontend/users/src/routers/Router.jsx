import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Home from '../componenets/Home'
import Edit from '../componenets/Edit'
import Delete from '../componenets/Delete'
import User from '../componenets/User'
import Create from '../componenets/Create'

class Router extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path = "/" exact component = {Home} />
                    <Route path = "/create" exact component = {Create} />
                    <Route path = "/delete" exact component = {Delete} />
                    <Route path = "/:count" exact render = {(props)=><Home {...props}/>} />
                    <Route path = "/user/:id" exact render={(props)=><User {...props} />}/>
                    <Route path = "/edit/:id" exact render ={(props)=><Edit {...props} />} />
                </Switch>
            </>
        )
    }
}
export default Router