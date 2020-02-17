import React from 'react'
import axios from 'axios'

class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email : "",
            password : ""
        }
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
      }

    handleClick = (e) =>{
    e.preventDefault()
    let email = this.state.email
    let password = this.state.password
    console.log({
        "email" : email,
        "password" : password
    })
    axios.post('http://127.0.0.1:5000/auth/signin',{
            "email" : email,
            "password" : password
        }).then
        (res =>
            alert(res.data)
        ).catch(error => console.log(error))

        this.setState({
            email : "",
            password : ""
        })
    }

    render(){
        return (
            <div>
                <div className="bgLogin mt-5">
                    <h3 className="text-center mt-1">SignIn Form</h3>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Email</label>
                        <input className="form-control" onChange={this.handleChange} type="email" value={this.state.email} name="email" placeholder="Enter email" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Password</label>
                        <input className="form-control" onChange={this.handleChange} type="password" value={this.state.password} name="password" placeholder="Enter password" />
                    </div>
                    <button className="btn btn-primary mt-3 ml-3 mb-3" onClick={this.handleClick}>Sign In</button>
                </div>
            </div>
        )
    }
    
}

export default SignIn
