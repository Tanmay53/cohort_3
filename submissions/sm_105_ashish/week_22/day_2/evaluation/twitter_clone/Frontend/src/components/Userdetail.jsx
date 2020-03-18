import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from "react-redux"
import {signOut,checkIsLoggedIn,getUser} from '../redux/Action'
import {getBlog} from "../redux/BlogAction"
import SideNavPage from './Sidenav'
import Blogcard from "./Blogcard"

 class Userdetail extends Component {
    componentDidMount = async () => {
      await  this.props.checkIsLoggedIn()
        const token = this.props.token
        const url = "http://127.0.0.1:5000"
       await this.props.getUser(url,token)
        let tweeturl = "http://127.0.0.1:5000/auth/tweet"
        this.props.getBlog(tweeturl,token)
     }
    render() {
        if(this.props.isLoggedIn){
            if(this.props.tweets.length==0){
                return (
                <>
                    <div className="my-2 mx-auto justify-content-center">
                    <div className="row">
                        <div className="col-1">
                            <SideNavPage/>
                        </div>
                        <h1 className ="text-center btn-info mx-auto my-4"> You are not following anyone</h1>
                        </div>
                    </div>
                </>)
            }
            else{
        return (
            <div className="my-2 mx-auto justify-content-center">
            <div className="row">
                <div className="col-1">
                    <SideNavPage/>
                </div>
                <div className="col-11 my-4">
                    <div className="row">
                        {this.props.tweets.map(ele=>(<div className="col-sm-12 col-md-10 col-lg-10 my-4 mx-auto" style={{height:"10%"}} key={ele.id}><Blogcard data={ele}/></div>))}
                    </div>
                </div>
            </div>
            </div>
        )}}
        else{
            return (<Redirect to="/"/>)
        }
    }
}
const mapStateToProps = (state) => ({
    ...state,
    token:state.commonReducer.token,
    isLoggedIn:state.commonReducer.isLoggedIn,
    user:state.commonReducer.user,
    tweets:state.blogReducer.tweets
})

const mapDispatchToProps = dispatch => ({
    signOut:()=>dispatch(signOut()),
    checkIsLoggedIn:()=>dispatch(checkIsLoggedIn()),
    getUser:(url,token)=>dispatch(getUser(url,token)),
    getBlog:(url,payload)=>dispatch(getBlog(url,payload))
})

export default connect (mapStateToProps,mapDispatchToProps)(Userdetail)

