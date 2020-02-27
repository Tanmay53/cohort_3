import React from 'react'
import {Switch, Route,Link} from 'react-router-dom'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import Details from '../components/Details'
import Blog from '../components/Blog'
import Write from '../components/Write'
import {signout} from '../Redux/Action'
import { connect } from "react-redux"


function Routes(props){

    const handleclick = ()=>{
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            localStorage.removeItem("isLoggedIn")
            localStorage.setItem("isLoggedIn",false)
            props.signout(false)
        }

        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark" >
                    <h3 className="navbar-brand text-white" ><Link to="/blogs">Blogger's Paradise</Link></h3>
                    <div className=" navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav float-left">
                            <li className="nav-item active ml-3 ">
                                <Link to="/writeblog" >Write Blog</Link>
                            </li>
                        </ul>
                        <div className="ml-auto text-white">Hello {props.user}!</div>
                        {props.isloggedIn ? (
                            <div className="ml-auto">
                                <button className = "btn btn-info m-2" onClick={handleclick}>Sign off</button>
                            </div>
                            ):(
                                <div className="ml-auto">
                                    <Link to="/signin" className = "btn btn-info">Sign In</Link>
                                </div> 
                            )}
                    </div>
                </nav>
                <Switch>
                    <Route path="/blogs" exact component = {Blog} />
                    <Route path="/writeblog" exact component = {Write} />
                    <Route path="/details" exact component = {Details} />
                    <Route path="/signin" exact component = {SignIn} />
                    <Route path="/signup" exact component = {SignUp} />
                </Switch>
            </div>
        )
}

const mapStateToProps = state => ({
    user: state.user,
    isloggedIn : state.isloggedIn
});
  
const mapDispatchToProps = dispatch => ({
    signout: payload => dispatch(signout(payload)),
});

export default connect(mapStateToProps,mapDispatchToProps) (Routes)
