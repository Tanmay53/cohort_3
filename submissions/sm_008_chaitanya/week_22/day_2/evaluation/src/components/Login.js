import React from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            islogged:false
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8080/auth/login',this.state)
        .then(res=>{
            if(res){
                if(res.data.error===false){
                    alert('You are Successfully Logged in...!')
                    this.setState({
                        islogged:true
                    })
                }
            }
        })
        .catch(error=>console.log(error))

    }
    render(){
        if(this.state.islogged){
            return(
                <Redirect push to="/jobopenings"/>
            )
        }
        return(
            <React.Fragment>
                <div className="container">
                <h1 className="text-center mt-4 text-success font-weight-bold shadow">Login Page</h1>
                    <div className="row my-5">
                        <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 border p-5 rounded shadow">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label className="h5">Username</label>
                                    <input type="text" name="username" onChange={this.handleChange} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label className="h5">Password</label>
                                    <input type="text" name="password" onChange={this.handleChange} className="form-control"/>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-success px-5 mt-3">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Login