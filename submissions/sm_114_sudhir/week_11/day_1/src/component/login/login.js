import React from 'react';
import Form from './form'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fakeUsername : 'sudhir',
            fakePassword : 'sudhir',
        }
    }

    render(){
        // console.log('form render')
        return (
            <div id="formid">
                <Form login={this.state.fakeUsername}  psd= {this.state.fakePassword} />
            </div>
        )
    }
}

export default Login;