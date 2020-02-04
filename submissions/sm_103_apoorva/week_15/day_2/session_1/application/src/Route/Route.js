import React from 'react'
import {Route,Link,Switch} from 'react-router-dom'
import Home from '../components/Home'
import Add from '../components/Add'
import Done from '../components/Done'
import Delete from '../components/Delete'
import Purchase from '../components/Purchase'
import Edit from '../components/Edit'

function Routes()
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-dark" >
                <h3 className="navbar-brand text-white" >My Basket</h3>
                <div className=" navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item active ml-2">
                            <Link to="/add">Add Item</Link>
                        </li>
                        <li className="nav-item active ml-2">
                            <Link to="/done">Purchsed</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route path="/" exact component = {Home} />
                <Route path="/add" exact component = {Add} />
                <Route path="/done" exact component = {Done} />
                <Route path="/edit/:id" exact component = {(props) => <Edit {...props} />} />
                <Route path="/done/:id" exact component = {(props) =>  <Purchase {...props} />} />
                <Route path="/delete/:id" exact component = {(props) =>  <Delete {...props} />} />
            </Switch>
        </div>
        
    )
}

export default Routes

