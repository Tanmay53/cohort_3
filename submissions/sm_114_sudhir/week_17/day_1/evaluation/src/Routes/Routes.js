import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from '../components/common/Home'
import Navbar from '../components/common/Navbar'
import Rooms from '../components/common/Rooms'
import Login from '../components/auth/Login'
import SignUp from '../components/auth/SignUP'
import Orders from '../components/common/Orders'



function Routes() {
    return (
        <React.Fragment>
            {/* <Navbar/> */}
            <Switch>
                <Route exact path="/" component = {(props) => <Home {...props} />} />
                <Route path="/rooms" component = {(props) => <Rooms {...props} />} />
                <Route path="/login" component = {Login} />
                <Route path="/signup" component = {SignUp} />
                <Route path="/orders" component = {Orders} /> 
            </Switch>
        </React.Fragment>
    )
}

export default Routes


{/* <React.Fragment>
            <Switch>
                <Route path="/" exact component = {Home} />
                <Route path="/dashboard" component = {Dashboard} />
                <Route path="/addNewUser" component = {AddNewStaff} />
                <Route path="/login" component = {Login} />
                <Route path="/viewAllUser" exact component = {ViewAllStaff} />
                <Route path="/edit/:id" component = {Edit} />
                <Route component = {NotFound} />
            </Switch>  
        </React.Fragment> */}