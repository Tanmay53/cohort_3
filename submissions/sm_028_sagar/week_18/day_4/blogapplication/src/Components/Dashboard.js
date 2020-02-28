import React, { Component } from 'react'
import { connect } from 'react-redux'
import {login} from '../Redux/actions'
import ShowAllBlogs from './ShowAllBlogs'
import Axios from 'axios'

class Dashboard extends Component {
    constructor(props){
        super(props)
    }
   

    componentDidMount(){
        let tokendata = JSON.parse(localStorage.getItem('userDetail'))
        let token = tokendata['token']
        let status = tokendata['loggedIn']
        console.log(tokendata['loggedIn'])
        if(status){
            //save user details
                Axios.get('http://127.0.0.1:5000/auth/getuserdata',{
                    headers:{
                        Authorization:`Bearer ${token}` 
                    }
                })
                    .then(res => this.props.login(res.data.detail[0]))
                    .catch(err => console.log(err))
        }else{
            console.log('user is logged out')
        }
        
    }

    render(){
        // console.log(this.props.isLoggedIn)
        return (
            <div className='container'>
                <h1>Welcome, {this.props.detail.name}</h1>
                <ShowAllBlogs {...this.props} />
            </div>
        )
    }
    
}

const mapStateToProps = state =>{
    return {
        detail:state.currentUserDetails,
        isLoggedIn:state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        login:(user) => dispatch(login(user)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)

