import React from "react";
import axios from "axios";
import Head from "./Head";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      username: "",
      mobile: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/auth/register", this.state)
      .then(res => {
        if (res) {
          const response = res.data;
          if (response.error === true) {
            alert("You are already registered");
          } else {
            alert("Success");
          }
        }
      })
      .catch(error => console.log(error));
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      email: "",
      password: "",
      username: "",
      mobile: ""
    });
  };
  render() {
    return (
      <React.Fragment>
        <Head />
        <div className="container">
          <h1 className="text-center text-success font-weight-bold mb-5 ">
            SignIn Here Please
          </h1>
          <div className="row">
            <div className="col text-center justify-content-center">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label className="h5">Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                    className="form-control"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="form-group">
                  <label className="h5">Email</label>
                  <input
                    type="text"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    className="form-control"
                    placeholder="Enter Your Valid Email"
                  />
                </div>
                <div className="form-group">
                  <label className="h5">Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    className="form-control"
                    placeholder="Create a Password"
                  />
                </div>
                <div className="form-group">
                  <label className="h5">UserName</label>
                  <input
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                    className="form-control"
                    placeholder="Ceate a Username (all small letter)"
                  />
                </div>
                <div className="form-group">
                  <label className="h5">Mobile No.</label>
                  <input
                    type="number"
                    name="mobile"
                    onChange={this.handleChange}
                    value={this.state.mobile}
                    className="form-control"
                    placeholder="+91"
                  />
                </div>

                <div className="text-center">
                  <button className="btn btn-success">Enter to SignIn</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Signin;
