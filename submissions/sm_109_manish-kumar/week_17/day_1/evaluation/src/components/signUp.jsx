import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            arr:[],
            detail:{
                name:"",
                username:"",
                password:"",
                email:""
            }
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    handleChange = (e) => {
        this.setState({
            ...this.state,
            detail:
            {...this.state.detail, [e.target.name]: e.target.value }
        })
    }
    
    render() {
        return (
            <div className ="row" >
                <div className="col"></div>
                    <div className = "col mt-4" style={{backgroundColor: "lightgrey"}}>
                        <form>
                            <fieldset>
                                <legend className = "m-2">Sign Up</legend>
                                
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" className = "form-control m-2" 
                                            onChange ={this.handleChange} value ={this.state.name} name = "name" />
                                
                                    <label htmlFor="username">Username</label>
                                    <input type="text" id="username" className = "form-control m-2"
                                            onChange= {this.handleChange} value={this.state.username} name ="username" />
                                
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" className = "form-control m-2"
                                            onChange={this.handleChange} value={this.state.password} name="password" />
                                
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email"className = "form-control m-2" 
                                            onChange={this.handleChange} value ={this.state.email} name= "email" />
                                
                                    <input type="submit" className ="m-2" onClick = {this.handleSubmit}/>
                                
                            </fieldset>
                        </form>
                    </div>
                <div className="col"></div>
            </div>
        )
    }
}
