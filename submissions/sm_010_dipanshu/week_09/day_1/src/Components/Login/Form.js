import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

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

  handleSubmit = event => {
    // console.log(
    //   "Username and password submitted in Form.js are: ",
    //   this.username,
    //   this.password
    // );
    event.preventDefault();
    this.props.function(this.username, this.password);
  };

  render() {
    return (
      <div>
        <form className="col-4 mt-5 ml-5 border rounded border-dark p-3 shadow shadow-lg mb-5">
          <h3 className="font-weight-bold mb-3">Sign in</h3>
          <div className="form-group">
            <label className="font-weight-bold">
              Username or Email Address
            </label>
            <input
              type="email"
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
export default Form;
