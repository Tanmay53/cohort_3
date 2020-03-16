import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Home from '../components/Home'
import Dashboard from '../components/Dashboard'
import Addbook from '../components/Addbook'
import Editbook from '../components/Editbook'

export default class Routers extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="container mb-5 mt-5 text-center">
                        <div className="row">
                            <div className="col-6"><Link to="/dashboard">Dashboard</Link></div>
                            <div className="col-6"><Link to="/addbook">Add a New BOOK</Link></div>
                        </div>

                    </div>
                </div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/addbook" exact render={(props) => <Addbook {...props} />} />
                    <Route path="/editbook/:id" exact render={(props) => <Editbook {...props} />} />

                </Switch>
            </div>
        )
    }
}
