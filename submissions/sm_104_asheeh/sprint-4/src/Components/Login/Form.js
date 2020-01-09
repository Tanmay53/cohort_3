import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props)
        
        this.state= {

        }
    }
    render() {
        return (
            <div className="container ">
                <div className="row m-auto">
                    <div className="col-2"></div>
                    <div className="col-8 border border-dark ">
                        <h1>Sign in</h1>
                        <form>
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">Username or Email address</label>
                              <input  name="inputUsername" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">Password</label>
                              <input name="inputPassword" type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button onClick={this.props.check} type="submit" className="btn btn-primary">Sign In</button>
                        </form>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        )
    }
}
