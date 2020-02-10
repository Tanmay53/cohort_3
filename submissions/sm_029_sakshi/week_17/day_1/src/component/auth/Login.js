import React, { Component } from "react";
import { connect } from "react-redux";
import { checkLogin } from "../../Redux/action";
import { Redirect } from "react-router-dom";
import Navbar from '../../Route/Navbar'

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    if (this.state.username === "admin" && this.state.password === "admin") {
      this.props.checkLogin();
    } else {
      alert("Invalid login details !");
    }
  };

  render() {
    if (this.props.login) {
      return <Redirect to="/" />;
    } else {
      return (
        <React.Fragment>
           <Navbar/>
       
        <div className="col-5 bg-info offset-4 mt-5">
             
            <h3 className="mb-3 text-center">LOGIN</h3>
          <form action="/action_page.php">
            <div class="form-group">
              <label for="email">Username:</label>
              <input
               
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                class="form-control"
                id="email"
              />
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input
               
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                class="form-control"
                id="pwd"
              />
            </div>
          
<div className="text-center">
<button className="mb-5 " onClick={this.handleClick}>SUBMIT</button>
</div>
          
          </form>
        </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch => ({
  checkLogin: payload => dispatch(checkLogin(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
