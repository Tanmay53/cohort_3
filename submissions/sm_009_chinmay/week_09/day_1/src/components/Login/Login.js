import React, { Component } from 'react'

// Login.js will hold the Form.js
class Login extends Component {
    constructor(){
        super();
        
        this.state = [
            userObj = [
                {uname:"testUname1", pass: "test@123"}
            ]
        ]
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        // this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        
        return (
            <div>
                {/* <form>
                    <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input onClick={this.handleSubmit} type="submit" value="Submit" />
                </form> */}
            </div>
        )
    }
}

export default Login;