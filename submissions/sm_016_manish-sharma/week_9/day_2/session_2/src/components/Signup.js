import React from 'react'

class Signup extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className='container text-center'>
                    <div className='my-5 py-5'>
                        <h1>Join 1.5+ million investors & traders</h1>
                        <h5 className='font-weight-light my-4'>Open a trading and Demat account online and start investing for free</h5>
                    </div>
                </div>
                <div className='container d-flex justify-content-center'>
                        <div className='col mx-5'>
                            <img src='https://zerodha.com/static/images/account_open.png'/>
                        </div>
                        <div className='col text-left my-5'>
                            <h2>Signup now</h2>
                            <p>Or continue with your existing application</p>
                            <br></br>
                            <div className='form-group'>
                                <div>
                                    <div className='input-group-prepend'>
                                    <span class="input-group-text">+91</span>
                                    <input className='form-control' placeholder='Your 10 digit mobile number'/></div>
                                </div>
                            </div>
                            <div><small className='text-muted'>You will receive an OTP on your number</small></div>
                            <div className='btn btn-primary'>Continue</div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Signup