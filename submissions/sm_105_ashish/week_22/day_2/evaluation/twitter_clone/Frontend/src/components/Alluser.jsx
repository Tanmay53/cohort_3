import React, { Component } from 'react'
import UserCard from './UserCard'
import {Link,Redirect} from 'react-router-dom'
import {connect} from "react-redux"
import {getAllUser} from "../redux/getalluser_action"

class Alluser extends Component {


    componentDidMount(){
        const url = "http://127.0.0.1:5000/auth/allUsers"
        const token = this.props.token
        this.props.getAllUser(url,token)
    }

    render() {
        console.log(this.props.allUser)
        let arr = []
        for (let i = 0;i < this.props.allUser.length; i++){
            arr.push( <div className="col-3 p-2"><UserCard data={this.props.allUser[i]}/></div>)
        }
        if(this.props.isLoggedIn){
        return (
            <div className="container">
                <h1 className="btn-info text-center mx-auto my-4">Peoples to follow on Twitter</h1>
                <div className="row">
                   {arr}
                </div>
                <div><Link className="btn btn-info" to="/user">Go back</Link></div>
            </div>
        )
        }
        else{
            return(
             <Redirect to ="/"/>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    token:state.commonReducer.token,
    isLoggedIn:state.commonReducer.isLoggedIn,
    allUser:state.AllUserReducer.allUsers
    
    
})

const mapDispatchToProps = dispatch=> ({
    getAllUser:(url,payload)=>dispatch(getAllUser(url,payload))
    
})


export default connect(mapStateToProps,mapDispatchToProps)(Alluser);
