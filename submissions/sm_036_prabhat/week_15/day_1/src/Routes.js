import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Auth from './Components/Auth/Auth'
import { connect } from 'react-redux'
import AddNewTopic from "./Components/Common/AddNewTopic"
import ViewTopic from "./Components/Common/ViewTopic"
import Comment from './Components/Common/Comment';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' render={() => this.props.isLoggedIn ? <Dashboard /> : <Redirect to='/login' />} />
                <Route exact path='/dashboard' render={() => this.props.isLoggedIn ? <Dashboard /> : <Redirect to='/login' />} />
                <Route exact path='/login' render={() => <Auth />} />
                {/* <Route exact path="/dashboard/addtopic" component={AddNewTopic}></Route>
                <Route exact path="/dashboard/viewtopic" component={ViewTopic}></Route> */}
                <Route exact path="/dashboard/viewtopic/:id" render={(props)=> <Comment {...props} />}></Route>

                <Route exact path="/dashboard/addtopic" render={(props)=> this.props.isLoggedIn ? <AddNewTopic {...props}/> : <Redirect to='/login' /> } ></Route>
                <Route exact path="/dashboard/viewtopic" render={(props)=> this.props.isLoggedIn ? <ViewTopic {...props}/> : <Redirect to='/login' /> }></Route>
            </Switch>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLogin
})

export default connect(mapStateToProps)(Routes)


