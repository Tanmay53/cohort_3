import React from "react"
import {Switch,Link,Route} from "react-router-dom"
import Add_Address from "../address/Add_Address"
import Delete_Address from "../address/Delete_Address"
import Modify_Address from "../address/Modify_Address"
import List from "../components/List"
import Create from "../components/Create"
import Delete from "../components/Delete"
import Detail from "../components/Detail"
import Edit from "../components/Edit"
import Home from "../components/Home"

class Routes extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/list" exact render={(props) => <List {...props} />} />
                    <Route path="/create" exact render={(props) => <Create {...props} />} />
                    <Route path="/detail/:id" exact render={(props) => <Detail {...props} />}></Route>
                    <Route path="/delete/:id" exact render={(props) => <Delete {...props} />}></Route>
                    <Route path="/edit/:id" exact render={(props) => <Edit {...props} />}></Route>
                    <Route path="/add_address/:id" exact render={(props) => <Add_Address {...props} />}></Route>
                    <Route path="/delete_address/:id/:add_id" exact render={(props) => <Delete_Address {...props} />}></Route>
                    <Route path="/modify_address/:id/:add_id" exact render={(props) => <Modify_Address {...props} />}></Route>
                </Switch>
            </>
        )
    }
}
export default Routes