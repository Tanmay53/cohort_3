import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pass: "",
      success: false
    };
  }
  emailHandler = e => {
    this.setState({
      email: e.target.value
    });
  };
  passHandler = e => {
    this.setState({
      pass: e.target.value
    });
  };

  submitFrom = e => {
    e.preventDefault();
    // console.log(this.props.email, this.props.pass);
    // console.log(this.state.email, this.state.pass);
    if (
      this.props.email === this.state.email &&
      this.props.pass === this.state.pass
    ) {
      this.setState({
        success: true
      });
    } else {
      alert("Something went wrong Please try again");
    }
    this.setState({
      email: "",
      pass: ""
    });
  };

  render() {
    let showFrom;
    if (this.state.success) {
      showFrom = (
        <h1 className="text-center text-success mt-5 pt-5">
          SIGN-IN SUCCESSFUL
        </h1>
      );
    } else {
      showFrom = (
        <div className="w-50 py-5 m-auto shadow-lg rounded">
          <p className="display-4 text-center">Login Page</p>
          <form>
            <div className="form-row my-5">
              <div className="form-group col-md-6 offset-3">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Email is 'suyashmishra143143@gmail'"
                  className="form-control"
                  value={this.state.email}
                  onChange={e => this.emailHandler(e)}
                />
              </div>
              <div className="form-group col-md-6 offset-3">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password is 'samMas@882'"
                  className="form-control"
                  value={this.state.pass}
                  onChange={e => this.passHandler(e)}
                />
              </div>
              <div className="form-group col-md-6 offset-3">
                <button
                  type="submit"
                  className="btn btn-dark w-100"
                  onClick={this.submitFrom}
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    }
    return <div>{showFrom}</div>;
  }
}

export default Form;
