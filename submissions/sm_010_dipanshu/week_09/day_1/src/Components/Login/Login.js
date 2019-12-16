import React from "react";
import Form from "./Form";

var sampleUser = {
  username: "masai",
  password: "school"
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loginSuccess: false
    };
  }

  validate = (username, password) => {
    // console.log(
    //   "Arguments received in Login.js=>validate function are",
    //   username,
    //   password
    // );

    this.setState({
      username: username,
      password: password
    });

    setTimeout(() => {
      //   console.log("Updated State. State is =>", this.state);

      if (
        this.state.username === sampleUser.username &&
        this.state.password === sampleUser.password
      ) {
        alert("Correct credentials");
        this.setState({
          loginSuccess: true
        });
      } else {
        alert("Incorrect credentials. Please try again");
      }
    }, 1);
  };

  render() {
    if (this.state.loginSuccess) {
      return (
        <h1 className="text-success mt-5 ml-5 shadow shadow-lg col-4 p-3 text-center border border-dark rounded mb-5">
          Login Successfull
        </h1>
      );
    } else {
      return (
        <div>
          <Form function={this.validate} />
        </div>
      );
    }
  }
}
export default Login;
