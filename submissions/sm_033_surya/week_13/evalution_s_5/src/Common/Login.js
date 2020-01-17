import React  from 'react'
import {connect} from "react-redux"
import { loginaction } from "./actions"

class Login extends React.Component {
            constructor(props){
                super(props)
                this.state={
                    usename:"",
                    password:""
                }
            }
            handlechange =(e)=>{
                this.setState({
                    [e.target.name]:e.target.value
                })
            }
            handleSubmit=()=>{
                if(this.state.username == "admin" && this.state.password=="admin"){
                    this.props.dispatch(loginaction())
                    alert ("Login Successful")
                }
                else {
                    alert ("username or password incorrect")
                }
                this.setState({
                    username:"",
                    password:""
                })
            }
    render() {
        return (
            <>
            <div className="container">
                <div className="col-6 offset-3">
            <div>
            <label>username</label>
            </div>
            <div>
            <input className="col-12" value ={this.state.username} name="username" onChange={this.handlechange}/>
            </div>
            <div>
            <label>password</label>
            </div>
            <div>
            <input className="col-12" value = {this.state.password} name ="password" onChange={this.handlechange} />
            </div>
            <div className=" text-center col-12 m-4">
            <button className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
            </div>
            </div>
            </div>
            </>
        )
    }
}
    const mapStateToProps = state => {
        return {
            value: state.loginReducer
        }
    }
export default connect (mapStateToProps)(Login)
