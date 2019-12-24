/* eslint-disable no-useless-constructor */
import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className = "container mx-auto py-5 text-center mt-5">
                    <h1>Join 1.5+ million investors & traders</h1>
                    <p>Open a trading and Demat account online and start investing for free</p>
                </div>
                <hr></hr>
                <div className = "container mx-auto">
                    <div className = "row">
                        <div className = "col-6">
                            <img src = "account_open.png" className = "img-fluid" alt = "Account Open"></img>
                        </div>
                        <div className = "col-6 py-5">
                            <h3>Login now</h3>
                            <p className = "text-muted">Or continue with your existing application</p>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">+91</span>
                                </div>
                                <input type="number" class="form-control" placeholder="Your 10 digit mobile number"></input>
                            </div>
                            <p><small className = "text-muted">You will receive an OTP on your number</small></p>
                            <button className = "btn btn-primary btn-lg px-4">Continue</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;