import React from 'react'
import {Route,Switch,Link} from 'react-router-dom'
import Login from '../components/auth/Login'
import Home from '../components/common/Home'
import AddTopic from '../components/common/AddTopic'
import ShowTopic from '../components/common/ShowTopic'
import EditInfo from '../components/common/EditInfo'

function Routes()
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#e3f2fd"}}>
                <h3 className="navbar-brand" >My Question Bank</h3>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item active ml-2">
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route path="/" exact component = {Home} />
                <Route path="/login" component  = {Login} />
                <Route path="/addtopic" component = {AddTopic} />
                <Route exact path="/showtopic" component={ShowTopic} />
                <Route  path = "/showtopic/:id" component = {(props)=><EditInfo {...props} />} />
            </Switch>
        </div>
    )
}

export default Routes