import React from "react";

var admin = {
  username: "admin",
  password: "admin"
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };

    this.username = "";
    this.password = "";
  }

  handleChangeUsername = event => {
    this.username = event.target.value;

    // setTimeout(() => {
    //   console.log("Username", this.username);
    // }, 1);
  };

  handleChangePassword = event => {
    this.password = event.target.value;

    // setTimeout(() => {
    //   console.log("Password", this.password);
    // }, 1);
  };

  handleSubmit = async event => {
    console.log(
      "Username and password submitted are:",
      this.username,
      this.password
    );

    event.preventDefault();

    if (this.username === admin.username && this.password === admin.password) {
      console.log("Credentials Matched");
      await this.changeLoginState();
    } else {
      console.log("Credentials do not match");
    }

    this.props.function(this.state.isLoggedIn);
  };

  changeLoginState = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  render() {
    return (
      <div>
        <form className="col-4 mt-5 mx-auto border rounded border-dark p-3 shadow shadow-lg mb-5">
          <h3 className="font-weight-bold mb-3">Sign in</h3>
          <div className="form-group">
            <label className="font-weight-bold">Username</label>
            <input
              type="text"
              className="form-control"
              onChange={this.handleChangeUsername}
            />
          </div>
          <div className="form-group">
            <label className="font-weight-bold">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={this.handleChangePassword}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
