import React, { Component } from 'react'
import {Route, Switch } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Common/Login'
import Signup from '../Common/Signup'
import CreatePost from '../Components/CreatePost'
import Addcomment from '../Components/Addcomment'
import Post from '../Components/Post'
import Postshows from '../Components/Postshows'
import Logout from '../Common/Logout'
import Editpost from '../Components/Editpost'
import Editcomment from '../Components/Editcomment'

class Router extends Component {
    constructor(props){
        super(props)
        this.state={
            isAuth:false
        }
    }
    validate=(data)=>{
        this.setState({
            isAuth:data
        })
    }
    render() {
        console.log(this.state.isAuth,"ddd")
        return (
            <div>
                <Switch>
                <Route path="/home" component={Home} />
                <Route path='/' exact component = {Postshows} />
                <Route path="/CreatePost" exact component = {CreatePost} />
                <Route path = "/addcomment" exact  component ={Addcomment} />
                <Route path="/login" exact render = {()=><Login data={this.validate} /> } />
                <Route path="/signup" exact component = {Signup} />
                <Route path="/logout" exact component = {Logout} />
                <Route path="/post/:id" exact render={(props)=> <Post {...props} />}/> 
                <Route path='/editpost/:id' exact render={(props)=> <Editpost {...props} />}/> 
                <Route path="/editcomment/:id" exact render={(props)=><Editcomment {...props} />}/>
                </Switch>
            </div>
        )
    }
}
export default Router