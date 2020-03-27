import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {authenticate,setUsername} from '../../redux/authentication/actions'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:""
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleLogin=()=>{
        this.props.login(this.state)
        this.props.setUsername(this.state.username)
    }
    render(){
        return(
            <>
               <html>
                  <body >
                  <div className="text-center">
                      <img className="pt-4" src="logo.svg" alt="logo" height="110px" />
                    <div>
                    <p className="display-3 pb-5 pt-2">_-=Login=-_</p> 
                    <div className="col-lg-4 col-md-6 mx-auto ">
                    <div className="d-flex justify-content-between my-1">
                    <label className="my-auto">Username</label>
                    <input type="text"
                    className="form-control col-9" onChange={this.handleChange} name="username" id="" placeholder="Eg : masai-school"/>
                    </div>
                    <div className="d-flex justify-content-between my-1">
                    <label className="my-auto">Password</label>
                    <input type="password"
                    className="form-control col-9" onChange={this.handleChange} name="password" id="" placeholder="Eg : secret"/>
                    </div>
                    </div>
                    <div className="text-right mx-auto col-lg-4 col-md-6 ">
                    <small>First time user > <Link to="/signup"><span className="text-danger">Signup</span></Link></small>
                    </div>
                    <button type="button" onClick={this.handleLogin} className="btn btn-outline-info my-4 px-4">Login</button>
                    {this.props.islogged && <Redirect to="/home" /> }
                    </div>
                </div>  
                    </body> 
               </html>
            </>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        islogged:state.authReducer.isLogged
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        login:(value)=>dispatch(authenticate(value)),
        setUsername:(value)=>dispatch(setUsername(value))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);