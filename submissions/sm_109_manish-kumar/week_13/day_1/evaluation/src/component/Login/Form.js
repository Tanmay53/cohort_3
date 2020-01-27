import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : "",
             password : ""
        }
    }

    onSubmit = ()=>{
        this.props.validate(this.state.username, this.state.password);
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className ="col-3"></div>
                        <div className ="col-3">
                            <center><h2>SIGN IN</h2></center>
                            <form onSubmit ={(e)=>e.preventDefault()}>
                            <label htmlFor ="username">USERNAME : </label>
                                <input type ="text"
                                    id ="username"
                                    className ="form-control"
                                    onChange ={this.handleChange}
                                    value = {this.state.username}
                                    name = "username"
                                    />
                                <label htmlFor ="password">PASSWORD : </label>
                                <input type ="password"
                                    id ="password"
                                    className ="form-control"
                                    onChange ={this.handleChange}
                                    value = {this.state.password}
                                    name = "password"
                                    />
                                <input type = "submit"className ="mt-2" onClick={this.onSubmit}
                                    />
                            </form>
                        </div>
                        <div className ="col-3"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form
