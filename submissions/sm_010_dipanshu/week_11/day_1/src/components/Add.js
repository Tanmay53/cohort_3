import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      phone: "",
      sales: ""
    };
  }

  handleChange = event => {
    switch (event.target.id) {
      case "username":
        let username = event.target.value;
        this.setState({
          username: username
        });
        break;
      case "email":
        let email = event.target.value;
        this.setState({
          email: email
        });
        break;
      case "phone":
        let phone = event.target.value;
        this.setState({
          phone: phone
        });
        break;
      case "sales":
        let sales = event.target.value;
        this.setState({
          sales: sales
        });
        break;
      default:
        break;
    }

    // setTimeout(() => {
    //   console.log(
    //     "Username =>",
    //     this.username,
    //     "Email =>",
    //     this.email,
    //     "Phone =>",
    //     this.phone,
    //     "Sales=>",
    //     this.sales
    //   );
    // }, 1);
  };

  handleSubmit = event => {
    console.log(
      "User details submitted are:",
      this.state.username,
      this.state.email,
      this.state.phone,
      this.state.sales
    );

    console.log("User created =>", this.state);

    event.preventDefault();

    this.props.function(this.state);

    this.setState({
      username: "",
      email: "",
      phone: "",
      sales: ""
    });
  };

  render() {
    return (
      <div>
        <form className="col mt-5 mx-auto border rounded border-dark p-3 shadow shadow-lg mb-5 p-4">
          <h3 className="font-weight-bold mb-3">Enter Employee Details</h3>
          <div className="form-group">
            <label className="font-weight-bold">Name</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label className="font-weight-bold">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label className="font-weight-bold">Phone</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label className="font-weight-bold">Sales for FY 2019-20</label>
            <input
              type="number"
              className="form-control"
              id="sales"
              value={this.state.sales}
              onChange={this.handleChange}
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
export default Add;
