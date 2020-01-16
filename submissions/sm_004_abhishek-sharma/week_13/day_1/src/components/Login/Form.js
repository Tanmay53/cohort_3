import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        console.log(event.target.name, event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = () => {
        console.log("username", this.state.username, " Password : ", this.state.password)
        this.props.authenticate(this.state.username, this.state.password);
        this.setState({
            username: '',
            password: ''
        });
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row my-5 ">
                    <div className="col-8 col-sm-6 col-lg-6 offset-1 offset-sm-2 offset-md-3 p-5 rounded border border-dark">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="mt-5 font-weight-bold">Sign in</h1>
                                <label className = "mt-3"><h5 className = "font-weight-bold">Username or Email Address</h5></label>
                                <input name="username" onChange={this.handleChange} value={this.state.username} className="form-control shadow" type="text"></input>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-6">
                            <label><h5 className = "font-weight-bold">Password</h5></label>
                            </div>
                            <div className="col-6 text-right">
                                <a href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input name="password" onChange={this.handleChange} value={this.state.password} className="form-control shadow" type="password"></input>
                            </div>
                        </div>
                        <div className = "row mt-3">
                            <div className = "col-6">
                                <button onClick={this.handleClick} className="btn btn-danger btn-lg btn-block">Sign in</button>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default Form