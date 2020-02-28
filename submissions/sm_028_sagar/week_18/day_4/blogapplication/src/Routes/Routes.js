import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import Login from '../Components/Login'
import Register from '../Components/Register'
import WriteBlog from '../Components/WriteBlog'
import Logout from '../Components/Logout'
import SpecificBlog from '../Components/SpecificBlog'
import { connect } from 'react-redux'
import MyBlogs from '../Components/MyBlogs'

export default function Routes(props) {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={() => <Login />} />
                <Route exact path='/dashboard' render={(props) => <Dashboard {...props} />} />
                <Route exact path='/writeblog' render={(props) => <WriteBlog {...props}/>} />
                <Route exact path='/blog/:blog_id' render = {(props) => <SpecificBlog {...props} />} />
                <Route exact path={`/blog/:name/myblogs`} render = {(props) => <MyBlogs {...props} />} />
                <Route exact path='/logout' render={() => <Logout />} />
                <Route path = '/register' render = {() => <Register />} />
            </Switch>
        </div>
    )
}


