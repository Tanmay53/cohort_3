import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from "react-redux"
import {signOut,checkIsLoggedIn,getUser} from '../redux/Action'
import SideNavPage from './Sidenav'

 class Userdetail extends Component {
   async componentDidMount(){
       this.props.checkIsLoggedIn()
            const token = this.props.token
            const url = "http://127.0.0.1:5000"
            this.props.getUser(url,token)
     }
    render() {
        if(this.props.token){
        return (
            <div className="my-2">
                <h1 className="btn-grey m-auto text-center">Tech and code Blog page</h1>
                <div className="col-2">
                    <SideNavPage user={this.props.user}/>
                </div>
            </div>
        )}
        else{
            return (<Redirect to="/auth/login"/>)
        }
    }
}
const mapStateToProps = (state) => ({
    ...state,
    token:state.token,
    user:state.user
})

const mapDispatchToProps = dispatch => ({
    signOut:()=>dispatch(signOut()),
    checkIsLoggedIn:()=>dispatch(checkIsLoggedIn()),
    getUser:(url,token)=>dispatch(getUser(url,token))
})

export default connect (mapStateToProps,mapDispatchToProps)(Userdetail)

