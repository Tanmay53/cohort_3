import React from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import Add from '../components/Add'
import Show from '../components/Show'
import Edit from '../components/Edit'
import Delete from '../components/Delete'
import Details from '../components/Details'

function Routes() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark" >
                <h3 className="navbar-brand text-white" >User Data</h3>
                <div className=" navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active ml-2">
                            <Link to="/users/create">Add Data</Link>
                        </li>
                        <li className="nav-item active ml-2">
                            <Link to="/users/listing">Show Data</Link>
                        </li>
                    </ul>
                </div>
            </nav>
           
            <Switch>
                <Route path="/users/create" exact component = {Add} />
                <Route path="/users/listing" exact component = {Show} />
                <Route path="/users/edit/:id" exact component = {(props) => <Edit {...props} />} />
                <Route path="/users/details/:id" exact component = {(props) =>  <Details {...props} />} />
                <Route path="/users/delete/:id" exact component = {(props) =>  <Delete {...props} />} />
            </Switch>
        </div>
    )
}

export default Routes
