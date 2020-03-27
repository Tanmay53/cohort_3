import React from 'react'
import { Switch, Route } from "react-router-dom"
import List from "./components/List"
import Create from "./components/Create"
import Show from "./components/Show"
import Edit from "./components/Edit"
import Delete from "./components/Delete"
import NotFound from './components/NotFound'
class Routes extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/list" exact render={(props)=><List {...props}/>}></Route>
                    <Route path="/create" exact render={(props) => <Create {...props} />} />
                    <Route path="/show/:id" exact render={(props) => <Show {...props} />}></Route>
                    <Route path="/edit/:id" exact render={(props) => <Edit {...props} />}></Route>
                    <Route path="/delete/:id" exact render={(props) => <Delete {...props} />}></Route>
                    <Route path component={NotFound}/>
                </Switch>
            </>
        )
    }
}
export default Routes