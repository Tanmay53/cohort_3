import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    handleClickUser = (e) => {
        this.setState({
            username: e.target.value
        })
    };

    handleClickPass = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleClick = event => {
        if (this.props.data.username === this.state.username && this.props.data.password === this.state.password) {
            alert("Correct credentials")

            this.props.function()
        } 
        else {
            alert("Incorrect credentials. Please try again");
        }
    };

    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="display-3 text-center">Login</div>
                    <div className="row">
                        <div>
                            <form>
                                <div className="form-group">
                                    <label>User Name or Email Address</label>
                                    <input className="form-control" value={this.state.username} onChange={this.handleClickUser} placeholder="masai"></input>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input className="form-control" value={this.state.password} onChange={this.handleClickPass} placeholder="school"></input>
                                </div>
                            </form>
                            <button onClick={this.handleClick}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Form;
