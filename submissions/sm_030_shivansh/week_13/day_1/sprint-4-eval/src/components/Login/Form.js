import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.username = "";
        this.password = "";
    }

    //function  to  handle username
    handleUsername = (event) => {
        this.username = event.target.value;

    };

    //function  to  handle password
    handlePassword = (event) => {
        this.password = event.target.value;
    };

    handleSubmit = (event) => {

        event.preventDefault();

        // console.log(this.props.function);

        //calling the validate function
        this.props.function(this.username, this.password);
    };

    render() {
        return (
            <div>
                <form className="m-5 border border-dark p-3">
                    <h1 className=" mb-5 text-info text-center">SIGN IN</h1>

                    <div className="form-group ">
                        <label className="h3" for="email">Username /Email Address </label>
                        <input id="email" type="email" className="form-control"
                            onChange={this.handleUsername}
                        />
                    </div>

                    <div className="form-group">
                        <label className="h3" for="password">Password</label>

                        <input
                            type="password" className="form-control"
                            onChange={this.handlePassword}
                        />
                    </div>

                    <div className="text-center">
                        <button type="submit"
                            className="btn btn-primary btn-lg"
                            onClick={this.handleSubmit}>

                            Submit
                        </button>
                    </div>

                </form>
            </div>
        );
    }
}
export default Form;