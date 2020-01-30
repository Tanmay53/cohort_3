import React from 'react'
import Home from "../Dashboard/Home"
import AddItem from "../Add/AddItem"
import {Route, BrowserRouter, Switch, Link} from "react-router-dom"
import EditItem from "../Edit/EditItem"
import DeleteItem from "../Delete/DeleteItem"
import MarkItem from "../Mark/MarkItem"
import PurchasedItems from "../Mark/PurchasedItems"
import Dashboard from "../Dashboard/Dashboard"

export const Routes= ()=> {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/home" component={Home}/>
                <Route path="/add" component={AddItem}/>
                <Route path="/edit/:id" component={EditItem}/>
                <Route path="/delete/:id" component={DeleteItem}/>
                <Route path="/mark/:id" component={MarkItem}/>
                <Route path="/done" component={PurchasedItems}/>
                <Route component={()=><h1>404 Not found !</h1>}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes