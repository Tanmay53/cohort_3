import React from "react"

class Form extends React.Component {
    constructor(props) {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        return (
        <div className="form">
            <div className="form2">
                <label htmlFor="username">Username or Email Address</label>
                <input type="text" name="username" id="username" onChange={this.handleChange} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={this.handleChange} />
                <input type="submit" id="submit" onClick={() => this.props.formSubmit(this.state)} />
            </div>
        </div>
        )
    }
}

export default Form