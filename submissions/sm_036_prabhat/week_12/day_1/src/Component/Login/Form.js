import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    handleClick = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleClickPass = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = (event) => {
        if (this.props.data.username === this.state.username && this.props.data.password === this.state.password) {
            this.props.login()
        } 
        else {
            alert("Incorrect credentials. Please try again");
        }
    };

    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="display-3 text-center m-5">Login</div>
                    <div className="d-flex justify-content-center">
                        <div className="row">
                            <div className="card p-5">
                                <form>
                                    <label>User Name</label>
                                    <input name="username" className="form-control" value={this.state.username} onChange={this.handleClick} placeholder="masai"></input>
                                    <label>Password</label>
                                    <input name="password" className="form-control" value={this.state.password} onChange={this.handleClick} placeholder="school"></input>
                                </form>
                                <button className="btn btn-secondary mt-3 px-5" onClick={this.handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;
