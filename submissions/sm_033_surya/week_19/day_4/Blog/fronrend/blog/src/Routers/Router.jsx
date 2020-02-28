import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
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
    constructor(props) {
        super(props)
        this.state = {
            isAuth: false,
            islogin: false,
            username: ""
        }
    }
    validate = (data, name) => {
        console.log(data, name)
        let user = name.split("@")

        this.setState({
            isAuth: data,
            username: user[0]
        })
    }
    handleclick = () => {
        this.setState({
            isAuth: false,
            islogin: true
        })
        localStorage.clear()

    }
    render() {
        console.log((this.state.isAuth && !this.state.islogin),this.state.isAuth,!this.state.islogin)
        return (
            <div>
                <div className="container-fluid">

                    <div className="row bg-primary p-4">
                        <div className="col-3"> <Link to="/"><button className="btn btn-light">Home</button></Link></div>
                        {(!this.state.isAuth && !this.state.islogin) && <div className="col-3"><Link to="/login"><button className="btn btn-light">Login</button></Link></div>}
                        <div className="col-3"><Link to="/CreatePost"><button className="btn btn-light">Create Post</button></Link></div>
                        {(this.state.isAuth && !this.state.islogin) && <div><button>{this.state.username}</button></div>}
                        {(this.state.isAuth && !this.state.islogin) && <div className="col-3"><button className="btn btn-light" onClick={this.handleclick}>Logout</button></div>}
                        {(!this.state.isAuth && this.state.islogin) && <Redirect to="/login" />}
                        {/* <button className="btn btn-light" onClick={this.handleclick}>Logout</button> */}

                    </div>
                </div>
                <Switch>
                    <Route path='/' exact component={Postshows} />
                    <Route path="/CreatePost" exact component={CreatePost} />
                    <Route path="/addcomment" exact component={Addcomment} />
                    <Route path="/login" exact render={(props) => <Login isAuth={this.validate} {...props} />} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/logout" exact render={(props) => <Logout />} />
                    <Route path="/home" exact render={(props) => <Home {...props} />} />
                    <Route path="/post/:id" exact render={(props) => <Post {...props} />} />
                    <Route path='/editpost/:id' exact render={(props) => <Editpost {...props} />} />
                    <Route path="/editcomment/:id" exact render={(props) => <Editcomment {...props} />} />
                </Switch>
            </div>
        )
    }
}
export default Router