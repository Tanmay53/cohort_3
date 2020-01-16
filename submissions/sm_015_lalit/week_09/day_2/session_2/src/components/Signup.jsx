import React from 'react';

export default class Signup extends React.Component{
    render(){
        return(
            <div className="text-center">
                <br className="mt-5"></br>
                <p className="h2 mt-5">Join 1.5+ million investors & traders</p>
                <p className="text-muted mt-3 h5"> Open a trading and Demat account online and start investing for free </p>
                <div className="row">
                    <div className="col-6">
                        <img className="img-fluid" src="https://zerodha.com/static/images/account_open.png" alt=""/>
                    </div>
                    <div className="col-6">
                        <div>
                        <p className="h2 text-left mt-5">Signup now</p>
                        <p className="text-muted text-left">Or continue with your existing application</p>
                        </div>
                        <div className="input-group col-6 p-0 mt-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="">+91</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Your 10 digit mobile number" aria-label="Username" />
                        </div>
                        <p className="text-left text-muted p-0 m-0"><small>You will receive an OTP on your number</small></p> 
                        <p className='text-left mt-3'><button type="button" className="btn btn-primary text-left">Continue</button></p>
                    </div>
                    
                </div>
            </div>
        )
    }
}