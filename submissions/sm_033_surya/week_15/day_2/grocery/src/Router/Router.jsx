import React from 'react'
import { Switch, Route } from "react-router-dom"
import Home from '../components/Home';
import Additems from '../components/Additems';
import Edit_item from '../components/Edit_item';
import Delete_item from "../components/Delete_item";
import Marked from '../components/Marked';
import Purchased from '../components/Purchased';

class Router extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/additem" exact component={Additems} />
                    <Route path="/done" exact component={Purchased} />
                    <Route path="/edit/:id" exact render={(props) => <Edit_item {...props} />} />
                    <Route path="/delete/:id" exact render={(props) => <Delete_item {...props} />} />
                    <Route path="/mark/:id" exact render={(props) => <Marked {...props} />} />

                </Switch>
            </>
        )
    }
}
export default Router