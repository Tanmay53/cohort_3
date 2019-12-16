import React from "react"
import Login from "./Login";

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "",
            password: ""
        }
    }
    render() {
        console.log(this.state.user)
        console.log(this.state.password)
        return (
            <div className="container">
                <div className="col-lg-6 col-md-12 col-sm-12 border border-secondary offset-2 m-5 p-5 rounded">
                    <div className="col-12 m-2">
                        <label>UserName:</label>
                    </div>
                    <div className="col-12 m-2">
                        <input className="p-2 col-12" placeholder="Enter UserName" value={this.state.user} onChange={(e) => this.setState({ user: e.target.value })} />
                    </div>
                    <div className="col-12 m-2">
                        <label>Password:</label>
                    </div>
                    <div className="col-12 m-2">
                        <input className="p-2 col-12" placeholder="Enter Password" type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                    </div>
                    <div className="col-12 m-2">
                        <button className="col-3 offset-5 btn btn-success" onClick={() => this.props.validate(this.state.user, this.state.password)}>Sign in</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Form