import React from 'react'
import $ from 'jquery'
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.credentials = props.data
        this.boolean = false
    }
    //function to get the live stored in state
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    //function to check the credentials with the fake user's information
    handleSubmit = (event) => {
        console.log(this.credentials.length)
        for (let i = 0; i < this.credentials.length; i++) {
            if (this.state.username === this.credentials[i]["username"]) {
                if (this.state.password === this.credentials[i]["password"]) {
                    $("#hiding").hide();
                    alert("LOGIN SUCCESSFULLY")
                    this.setState({ boolean: true })
                }
            }
        }
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form id="hiding" class="box" onSubmit={this.handleSubmit}>
                    <div class="mt-3">
                        Username:<br></br>
                        <input type="text" value={this.state.value} name="username" onChange={this.handleChange} />
                    </div>
                    <div>
                        Password:<br></br>
                        <input type="text" value={this.state.value} name="password" onChange={this.handleChange} />
                    </div><br></br>
                    <input class="bg-dark text-white" type="submit" value="SUBMIT"></input>
                </form>
                {this.state.boolean && <div><h1>LOGIN SUCCESSFULLY</h1></div>}
            </div>
        )
    }
}
export default Form