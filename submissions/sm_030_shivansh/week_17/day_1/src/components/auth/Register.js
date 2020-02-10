import React from "react";


class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            username: "",
            mobileNumber: "",
            description: ""

        }
    }
    //function to handle the change of the input
    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })

    }

    render() {
        return (
            <>
                <div className="row justify-content-center my-5">

                    <div className="col-12 col-lg-4 border border-dark py-5 px-3">
                        <h1 className="my-3 text-center font-weight-normal">Registration Form</h1>
                        <form onSubmit={this.handleSubmit}>

                            <div class="form-group">
                                <label for="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    id="name"
                                    value={this.state.name}
                                    placeholder="name"
                                />
                            </div>

                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                    placeholder="something@gmail.com"
                                />
                            </div>
                            <div class="form-group">
                                <label for="password">password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    name="password"
                                />
                            </div>

                            <div class="form-group">
                                <label for="username">Username</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="username"
                                    placeholder="username"
                                    value={this.state.username}
                                    name="username"
                                />
                            </div>

                            <div class="form-group">
                                <label for="mobile">Mobile</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="mobile"
                                    name="mobileNumber"
                                    value={this.state.mobileNumber}
                                    placeholder="88888 8888"
                                />
                            </div>

                            <div class="form-group">
                                <label for="description">Description</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="description"
                                    name="description"
                                    value={this.state.description}
                                    placeholder="Say Something About you..."
                                />
                            </div>


                            <div className="text-center">
                                <input
                                    type="submit"
                                    class="btn btn-primary"
                                    value="Submit"
                                />
                            </div>

                        </form>
                    </div>
                </div>
            </>
        )
    }
}


export default Register;