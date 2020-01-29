import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from '../Components/Login'
import Dashboard from '../Components/Dashboard'
import AddTopic from '../Components/AddTopic'
import ViewTopics from '../Components/ViewTopics'
import EditTopic from '../Components/EditTopic'

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/addTopic' component={AddTopic}/>
                    <Route path='/viewTopics' component={ViewTopics}/>
                    <Route path='/edit/:id' component={EditTopic}/>
                    <Route render={()=> <h1>Sorry page not found!!</h1> } />
                </Switch>
            </div>
        )
    }
}
export default Routes