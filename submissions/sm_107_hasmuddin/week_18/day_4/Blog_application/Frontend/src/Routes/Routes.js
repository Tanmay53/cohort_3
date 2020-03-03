import React, {useEffect} from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {GetUser} from "../components/REDUX/Action"
import Login from "../components/Auth/Login"
import Register from "../components/Auth/Register"
import Dash from "../components/Dash/Dash"
import CreateBlog from "../components/Blog/CreateBlog"
import {connect} from "react-redux"
import PrivateRoute from "../components/PrivateRoute/PrivateRoute"
import {fetch_blogs} from "../components/REDUX/Action"
import SingleBlog from "../components/Blog/SingleBlog"
import Profile from "../components/Profile/Profile"
 function Routes(props) {
    return (
        <BrowserRouter>
            <Switch>
            <PrivateRoute  path="/" exact component={Dash}/>
            <PrivateRoute  path="/createBlog" exact component={CreateBlog}/>
            <PrivateRoute  path="/blog/:blog_id" exact component={(props)=><SingleBlog {...props}/>}/>
            <PrivateRoute  path="/profile" exact component={(props)=><Profile {...props}/>}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Register}/>
            <Route  render={()=><h4>404 Not found</h4>}/>
            </Switch>
        </BrowserRouter>
    )
}

const mapDispath = dispatch =>{
    return {
        GetUser:user=>dispatch(GetUser(user)),
        fetch_blogs:()=>dispatch(fetch_blogs())
    }
}
export default connect(null, mapDispath)(Routes)