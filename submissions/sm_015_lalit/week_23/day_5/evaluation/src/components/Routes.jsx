import React from 'react'
import { Route, Link, Redirect, Switch} from 'react-router-dom'
import {connect} from 'react-redux' 
import Login from './common/Login'
import Register from './common/Register'
import EditDetails from './protected/EditDetails'
import BusRoutes from './protected/BusRoutes'
import AddCity from './protected/AddCity'
import AddBus from './protected/AddBus'
import NoMatch from './common/NoMatch'


class Routes extends React.Component{
    render(){
        const {islogged} = this.props
        return(
            <>
             <Switch>
             <Route exact path="/" render={()=><Login/>} />
             <Route exact path="/signup" render={(props)=><Register {...props}/>} />
            <Route path="/editDetails" render={(props)=><EditDetails {...props} /> } />
            <Route path="/home" render={()=><BusRoutes/>} />
            <Route path="/addCity" render={(props)=><AddCity {...props}/>} />
            <Route path="/addBus" render={(props)=><AddBus {...props}/>} />
            <Route component={NoMatch} />
             </Switch>
            
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    islogged:state.authReducer.isLogged
})


export default Routes