import React, { Component } from 'react'

class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            signupDetails: [
            {
                text1: "Sign up to drive", 
                text2: "Sign up to ride"
            },
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <br /><br />
                {this.state.signupDetails.map((e)=>
                    <div className='row'>
                        <div className='col-md-6 text-center'>
                            <a><h1 className='p-5'>{e.text1} <span style={{fontSize:50}}>&#8594;</span></h1></a>
                        </div>    
                        <div className='col-md-6 text-center'>
                            <a><h1 className='p-5'>{e.text2} <span style={{fontSize:50}}>&#8594;</span></h1></a>
                        </div>
                    </div>    
                )}
            </React.Fragment>
        )
    }
}

export default SignUp;
