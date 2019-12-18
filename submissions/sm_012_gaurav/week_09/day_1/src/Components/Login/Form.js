import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleClick = () => {
        this.props.onPressSubmit(this.state.username, this.state.password);
        this.setState({
            username: '',
            password: ''
        });
    }

    render() {
        return (
            <div className = "col-6 mx-auto mt-3">
                <h2>Sign in</h2>
                <div className = "form-group">
                    <label htmlFor = "username">Username</label>
                    <input type = "text" className = "form-control" id = "username" onChange = {this.handleChange} value = {this.state.username}></input>
                </div>
                <div className = "form-group">
                    <label htmlFor = "password">Password</label>
                    <input type = "password" className = "form-control" id = "password" onChange = {this.handleChange} value = {this.state.password}></input>
                </div>
                <button className = "btn btn-primary" onClick = {this.handleClick}>Sign In</button>
            </div>
        )
    }
}

export default Form;