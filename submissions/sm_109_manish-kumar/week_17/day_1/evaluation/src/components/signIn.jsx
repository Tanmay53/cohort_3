import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }
    
    
    render() {
        return (
            <div className ="row" >
                <div className="col"></div>
                    <div className = "col mt-4" style={{backgroundColor: "lightgrey"}}>
                        <form>
                            <fieldset>
                                <legend className = "m-2">Sign In</legend>
                                
                                    <label htmlFor="username">Username</label>
                                    <input type="text" id="username" className = "form-control m-2"/>
                                
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" className = "form-control m-2"/>
                                
                                    <input type="submit" className ="m-2" />
                                
                            </fieldset>
                        </form>
                    </div>
                <div className="col"></div>
            </div>
        )
    }
}