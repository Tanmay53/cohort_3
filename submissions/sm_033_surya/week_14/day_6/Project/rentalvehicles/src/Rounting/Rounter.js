import React from 'react'
import { Route, Switch } from "react-router-dom"
import Home from '../components/Home';
import Bookings from '../components/Bookings';
import History from '../components/History';
import Car from '../components/Car';
class Rounter extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/bookings/:id" exact component={Car} />
                    <Route path="/bookings" exact render={(props) => <Bookings {...props} />} />
                    <Route path="/history" exact component={History} />
                </Switch>
            </div>
        )
    }
}
export default Rounter