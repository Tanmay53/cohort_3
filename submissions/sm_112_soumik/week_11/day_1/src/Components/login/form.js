import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
      inputPass: "",
      login: false
    };
  }

  changeNameHandeler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = e => {
    if (
      this.props.name === this.state.inputName &&
      this.props.pass === this.state.inputPass
    ) {
      alert("Login Succesfull");
    } else {
      alert("Try again");
    }
    this.setState({ login: true });
    e.preventDefault();
  };

  render() {
    console.log(this.state);
    return (
      <div className="text-center">
        <h3>Login Page</h3>
        <div className="col-md-5 offset-3">
          {this.state.login ? (
            <h2 className="text-seccess">Login Succesfull!</h2>
          ) : (
            <form
              className="form-group text-center bg-warning text-dark p-4 my-4"
              onSubmit={this.submitForm}
            >
              <div className="col-md-12">
                <label>
                  Enter Name
                  <input
                    className="form-control"
                    name="inputName"
                    value={this.state.inputName}
                    onChange={this.changeNameHandeler}
                  />
                </label>
              </div>
              <div className="col-md-12">
                <label>
                  Enter Password
                  <input
                    className="form-control"
                    name="inputPass"
                    value={this.state.inputPass}
                    onChange={this.changeNameHandeler}
                  />
                </label>
              </div>

              <button className="btn btn-info" type="submit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }
}
export default Form;
