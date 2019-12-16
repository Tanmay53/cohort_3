import React from "react";
import Form from "./Form";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "amit@gmail.com",
      password: "123",
      status: true
    };
  }
  getLoginInfo = data => {
    if (
      data.username === this.state.username &&
      data.password === this.state.password
    ) {
      this.setState({
        status: false
      });
    }
  };
  render() {
    const toShow = this.state.status;
    return (
      <div>
        {toShow ? (
          <Form loginInfo={this.getLoginInfo} />
        ) : (
          <div className="alert alert-dark display-2 text-center" role="alert">
            SIGN-IN SUCESSFUL
          </div>
        )}
      </div>
    );
  }
}

export default Login;
