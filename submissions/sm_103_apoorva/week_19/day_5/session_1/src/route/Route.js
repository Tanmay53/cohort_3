import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {Route,Link,Switch} from 'react-router-dom'
import {signout,login} from '../redux/Action'
import Signin from '../auth/Signin'
import Signup from '../auth/Signup'
import Home from '../components/Home'
import UserProfile from '../auth/UserProfile'
import {UserOutlined} from '@ant-design/icons'

function Routes(props) {

    useEffect(() => {
        let username = localStorage.getItem('user')
        console.log(username)
        if(localStorage.getItem('user') != null){
            props.login({"isloggedIn":true,"user":username})
        }
      });


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <h3 className="navbar-brand text-white" ><Link to="/">Task Manager</Link></h3>
                    {props.isloggedIn ? (
                        <div className="ml-auto">
                            <Link to="/details"><UserOutlined style={{fontSize:"300%"}} /></Link>
                        </div> 
                        ):(
                            <div className="ml-auto">
                                <Link to="/signin" className = "btn btn-info">Sign In</Link>
                            </div> 
                        )}
                </div>
            </nav>
            <Switch>
                <Route path="/" exact component = {Home} />
                <Route path="/details" exact component = {UserProfile} />
                <Route path="/signin" exact component = {Signin} />
                <Route path="/signup" exact component = {Signup} />
            </Switch>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    isloggedIn : state.isloggedIn
})

const mapDispatchToProps = dispatch => ({
    signout: payload => dispatch(signout(payload)),
    login: payload => dispatch(login(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
