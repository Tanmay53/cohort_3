import React from 'react'
import Form from './Form'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DB: [{ "username": "piy", password: "jain" }, { username: "piyu", password: "jain" }, { username: "piyus", password: "jain" }, { username: "piyush", password: "jain" }]
        }
    }
    render(){
        return (
            <div>
                <Form data={this.state.DB} />
            </div>
        )
    }
}
export default Login