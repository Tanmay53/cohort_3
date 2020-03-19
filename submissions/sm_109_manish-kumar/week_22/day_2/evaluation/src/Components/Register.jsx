import React, { Component } from "react";
import { connect } from "react-redux";
import { userRegistration } from "../Redux/Action";
import axios from "axios";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: "",
        email: "",
        mobile: "",
        username: "",
        password: "",
        isRegistered: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    const { isRegistered } = this.state;
    const data = 
    {
      "name": this.state.name,
      "email": this.state.email,
      "password": this.state.password,
      "username": this.state.username,
      "mobile": this.state.mobile,
      "description":"hello"
    }
    
    axios.post("http://localhost:8080/auth/register",data)
    .then(res => {
      if(res.status === 200){
        this.setState({
          isRegistered:true
        })
        this.props.history.push("/home")
      }
    })
    .catch(err => {
      console.log(err);
    })
    const { sendRegisterDetail } = this.props;
    sendRegisterDetail(isRegistered);
  };
  login = () => {
    this.props.history.push("/")
  }

  render() {
    const { name, email, mobile, username, password } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-3" />
          <div
            className="col-6 mt-3 shadow p-3 mb-5 bg-black rounded sm-col-12"
            style={{ border: "1px solid black" }}
          >
            <center>
              <h3 className="m-2" style={{ fontFamily: "Herculanum" }}>
                Registration Details
              </h3>
            </center>
            <hr />
            <form>
              <center>
                <label className="m-2" htmlFor="name">
                  NAME
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    className="form-control m-2"
                  />
                </label>
              </center>
              <center>
                <label className="m-2" htmlFor="email">
                  EMAIL
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    className="form-control m-2"
                  />
                </label>
              </center>
              <center>
                <label htmlFor="comapny-name" className="m-2">
                  MOBILE NUMBER
                  <input
                    type="text"
                    id="company-name"
                    name="mobile"
                    value={mobile}
                    onChange={this.handleChange}
                    className="form-control m-2"
                  />
                </label>
              </center>
              <center>
                <label className="m-2">
                  USERNAME
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                    className="form-control m-2"
                  />
                </label>
              </center>

              <center>
                <label className="m-2">
                  PASSWORD
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    className="form-control m-2"
                  />
                </label>
              </center>
              <center>
                <input
                  type="submit"
                  onClick={this.handleClick}
                  className="m-2 mb-3 btn btn-success"
                />
              </center>
              <center>
                <button
                  type="submit"
                  onClick={this.login}
                  className="m-2 mb-3 btn btn-success"
                >Login</button>
              </center>
            </form>
          </div>
          <div className="col-3" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendRegisterDetail: details =>
    dispatch(userRegistration(details))
});

export default connect(null, mapDispatchToProps)(Registration);

