import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from '../components/Home'
import Create from '../components/Create'
import Addaddress from '../components/Addaddress'
import Edituser from '../components/Edit_user'
import Editaddress from '../components/Edit_address'
import Login from '../components/Login'
import Signup from '../components/Signup'
import axios from 'axios'

export default class Routers extends Component {
    constructor(props){
        super(props)
        this.state={
            isAuth:false
            // name:"hello"
        }
    }
    getdata =(x,y)=>{
        axios.post('http://localhost:5000/auth/login',{"email":x,"password":y})
        .then((res)=>{
            if (res.data.message){
                this.setState({
                    isAuth:true
                })
            }
        })
    }
    render() {
        console.log(this.props.data,"ddddd")
        return (
            <>
                <Route path="/" exact render={(props)=><Home isAuth={this.state.isAuth}/> } />
                <Route path="/login" exact render={(props) => <Login  {...props} isAuth={this.state.isAuth} data={this.getdata}/>} />
                <Route path = "/signin" exact render = {(props)=> <Signup {...props} />} />
                <Route path="/create" exact render={(props)=> <Create {...props}/>} />
                <Route path="/addaddress/:id" exact render={(props) => <Addaddress {...props} />} />
                <Route path="/editaddress/:id" exact render={(props) => <Editaddress {...props} />} />
                <Route path="/edituser/:id" exact render={(props) => <Edituser {...props} />} />
            </>
        )
    }
}
