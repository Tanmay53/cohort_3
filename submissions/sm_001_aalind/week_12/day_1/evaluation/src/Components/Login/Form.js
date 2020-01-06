import React, {Component} from "react";
import "./form.module.css";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleForm = (event) => {
        this.props.validateUser(this.state)
        event.preventDefault();
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleForm}>
                <label>Username (try: aalind)</label>
                <input type="text" name="username" onChange={this.changeHandler} />
                <label>Password (try: 12345)</label>
                <input type="password" name="password" onChange={this.changeHandler} />
                <input type="submit" value="Login" />
            </form>
        );
    }
}

export default Form