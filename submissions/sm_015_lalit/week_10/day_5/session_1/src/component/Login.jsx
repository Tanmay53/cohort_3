import React from 'react'
import styles from '../App.module.css'
import { Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {authenticate,setUsername} from '../redux/action'

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
            {/* style={{backgroundImage:"url(wave.svg)",backgroundRepeat:"no-repeat"}} */}
               <html>
                  <body className={styles.elementToAnimate}>
                  <div className="text-center" style={{backgroundImage:"url(wave.svg)",backgroundSize:"cover"}}>
                {/* <br className="my-4"/> */}
                    <div>
                    <p className="display-3 py-5">_-=Login=-_</p> 
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
                    {this.props.islogged && <Redirect to="/dashboard"/> }
                    </div>
                    <svg viewBox="0 0 1440 320"><path fill="#FFFFFF" fill-opacity="1" d="M0,192L60,197.3C120,203,240,213,360,186.7C480,160,600,96,720,74.7C840,53,960,75,1080,85.3C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>  
                    </body> 
               </html>
            </>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        islogged:state.islogged
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        login:(value)=>dispatch(authenticate(value)),
        setUsername:(value)=>dispatch(setUsername(value))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);