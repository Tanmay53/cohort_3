import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  inputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  checkLogin = e => {
    e.preventDefault();
    let data = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.loginInfo(data);
  };

  render() {
    return (
      <div className="col-md-6 offset-md-3 border p-4">
        <h3 className="display-4">Sign In</h3>
        <form onSubmit={e => this.checkLogin(e)}>
          <div className="form-group">
            <label htmlFor="username">Username / Email address</label>
            <input
              type="email"
              name="username"
              className="form-control form-control-lg"
              id="username"
              value={this.state.value}
              onChange={e => this.inputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control form-control-lg"
              id="password"
              value={this.state.value}
              onChange={e => this.inputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-outline-dark">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
