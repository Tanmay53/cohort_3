import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getProfile} from '../Redux/actions'

class Dashboard extends Component {

    componentDidMount(){
        console.log('inside component did mount',this.props.username)
        this.props.getUserProfile(this.props.username,this.props.token)
    }
    
    render(){
        return (
            <div className='container'>
                <h3>Dashboard</h3>
                <p>Username: {this.props.userProfile.username}</p>
                <p>name: {this.props.userProfile.name}</p>
                <p>mobile: {this.props.userProfile.mobile}</p>
                <p>email: {this.props.userProfile.email}</p>
                <p>description: {this.props.userProfile.description}</p>

            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        userProfile:state.profileData,
        username:state.username,
        token:state.token
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        getUserProfile:(username,token) => dispatch(getProfile(username,token))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)