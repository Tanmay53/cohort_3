import React from 'react'
import axios from "axios"
// import {Redirect} from 'react-router-dom'

class Register extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : '',
             email:'' ,
             password: '',
             username: '',
             mobilenumber: '',
             description: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitHandler = (e) =>{
        e.preventDefault() 
        console.log(this.state)
        axios.post("http://localhost:8080/auth/register",this.state)
        .then(res => {
            if(res){
                const response=res.data
                if(response.error===true){
                    alert('User already exists...Proceed to Login!')
                }
                else{
                    alert('Registration Success...Proceed to Login!')
                }
            }
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        const { name,email,username,password,mobilenumber,description } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div className="container bg-primary">
                        Name:
                        <input type="text" className="form-control" name="name" placeholder="Enter Your Name"  value ={name} onChange = {this.handleChange} required/>
                        Email:
                        <input type="text" className="form-control" name="email" placeholder="Enter Your Email" value={email} onChange = {this.handleChange} required/>
                        Password:
                        <input type="password" className="form-control" name="password" placeholder="Enter Your Password" value={password} onChange = {this.handleChange} required/>
                        Username:
                        <input type="text" className="form-control" name = "username" placeholder="Enter Your Username" value={username} onChange = {this.handleChange} required/>
                        Mobile Number:
                        <input type="text" className="form-control" name="mobilenumber" placeholder="Enter Your Mobile Number" value={mobilenumber} onChange = {this.handleChange} required/>
                        Description:
                        <input type="text" className="form-control" name="description" placeholder="Enter Description" value={description} onChange = {this.handleChange} required/>
                        <br></br>
                        <div className="row">
                            <button type="submit" className="btn btn-light mb-3 ml-3">Submit</button>
                            <h4 className="ml-5">Already Registered User <a href="foo" className="text-white">click here</a></h4>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}

export default Register