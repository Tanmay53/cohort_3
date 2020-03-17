import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <form className="border border-dark">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className="ml-5" for="price">username :</label>
                                <input type="text" id="username" className="form-control ml-5" aria-describedby="emailHelp" placeholder="username" />
                            </div>
                            <div className="form-group col-md-6 pl-5">
                                <label for="brand">Password :</label>
                                <input type="password" className="form-control" id="password" placeholder="password" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col ml-5">
                                <button type="submit" className="btn btn-primary" onclick="login()">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
