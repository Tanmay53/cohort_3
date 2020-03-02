import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Common/Login'
import Signup from '../Common/Signup'
import CreatePost from '../Components/CreatePost'
import Post from '../Components/Post'
import Postshows from '../Components/Postshows'
import Editpost from '../Components/Editpost'
import Editcomment from '../Components/Editcomment'
import { connect } from 'react-redux'
import { logout } from "../Actions/actions"

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
        this.props.dispatch(logout())

    }
    render() {
        console.log(this.props.value, "router")
        console.log((this.state.isAuth && !this.state.islogin), this.state.isAuth, !this.state.islogin)
        return (
            <div>
                <div className="container-fluid">

                    <div className="row bg-primary p-4">
                        <div className="col-6"> <Link to="/"><button className="btn btn-light m-2">Home</button></Link>
                            <Link to="/CreatePost"><button className="btn btn-light">Create Post</button></Link></div>


                        <div className="col-6"><div className="row d-flex justify-content-end">{!this.props.value && <Link to="/login"><button className="btn btn-light m-3">Login</button></Link>}
                            {this.props.value && <div><button className="btn btn-light m-3">{this.props.name}</button></div>}
                            {this.props.value && <div><button className="btn btn-light mt-3" onClick={this.handleclick}>Logout</button></div>}</div></div>
                        {!this.props.value && <Redirect to="/login" />}
                        {/* <button className="btn btn-light" onClick={this.handleclick}>Logout</button> */}

                    </div>
                </div>
                <Switch>
                    <Route path='/' exact component={Postshows} />
                    <Route path="/CreatePost" exact component={CreatePost} />
                    <Route path="/login" exact render={(props) => <Login isAuth={this.validate} {...props} />} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/home" exact render={(props) => <Home {...props} />} />
                    <Route path="/post/:id" exact render={(props) => <Post {...props} />} />
                    <Route path='/editpost/:id' exact render={(props) => <Editpost {...props} />} />
                    <Route path="/editcomment/:id" exact render={(props) => <Editcomment {...props} />} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    value: state.loginreducer.login,
    name: state.loginreducer.username
})
export default connect(mapStateToProps)(Router)
