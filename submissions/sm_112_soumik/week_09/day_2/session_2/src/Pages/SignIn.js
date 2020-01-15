import React from "react";
import { Redirect } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        pass: ""
      }
    };
  }
  handleChange = e => {
    let newUser = { ...this.state.user, [e.target.name]: e.target.value };
    this.setState({
      user: newUser
    });
  };
  render() {
    if (this.props.isAuth) {
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <h2 className="text-center">Sign in</h2>
          {/* sign in form  */}
          <div className="col-md-8 offset-3">
            <div className="form-group bg-info text-center col-md-8 p-4">
              <label>Enter Name</label>
              <input
                className="form-control is-valid"
                value={this.state.user.name}
                name="name"
                onChange={this.handleChange}
              />
              <label>Enter Password</label>
              <input
                className="form-control"
                value={this.state.user.pass}
                name="pass"
                onChange={this.handleChange}
              />
              <button onClick={this.props.submit} className="btn btn-dark my-3">
                {this.props.handleChange(this.state.user)}
                Login
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default SignIn;
