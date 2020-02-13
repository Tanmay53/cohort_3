import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import Orders from '../components/Orders'
import Room from '../components/Room'
import { payment } from '../components/payment'

class noroute extends React.Component {
    render() {
        return (
            <div className="container text-center">
                PAGE NOT FOUNT
            </div>
        )
    }
}


class Router extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/orders" exact component={Orders} />
                    <Route path="/payments" exact component={payment} />
                    <Route path="/:id" exact render={(props) => <Room {...props} />} />
                    <Route exact component={noroute} />
                </Switch>
            </>
        )
    }
}
export default Router