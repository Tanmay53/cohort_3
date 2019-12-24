import React, { Component } from 'react'

// Form.js will have its internal state and submit button
class Form extends Component {
    render(props) {
        return (
            <React.Fragment>             
                <div className="container">
                    <div className="row">
                            <form id="sendForm">
                                    <div className="form-group">
                                    <h3>Sign In</h3>
                                    <label htmlFor="inputEmail">Username or Email address</label>
                                    <input
                                        className="form-control"
                                        id="inputEmail"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                    />
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="inputPassword">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="inputPassword"
                                        placeholder="Password"
                                    />
                                    </div>
                                    <button type="submit" className="btn btn-danger">Sign In</button>
                            </form>
                    </div>
                </div>
            </React.Fragment>  
        )
    }
}

export default Form;