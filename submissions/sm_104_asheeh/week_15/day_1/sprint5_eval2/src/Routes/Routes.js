import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Components/Common/Home'
import Dashboard from '../Components/Common/Dashboard'
import AddTopic from '../Components/Common/AddTopic'
import ViewTopics from '../Components/Common/ViewTopics'
import Login from '../Components/Auth/Login'
import TopicPage from '../Components/Common/TopicPage'

export default class Routes extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component = {Home} />
                    <Route path="/dashboard" component = {Dashboard} />
                    <Route path="/addTopic" component = {AddTopic} />
                    <Route exact path="/viewTopics" component = {ViewTopics} />
                    <Route path="/login" component = {Login} />
                    <Route path="/viewTopics/:id" component = {TopicPage} />

                </Switch>
            </>
        )
    }
}
