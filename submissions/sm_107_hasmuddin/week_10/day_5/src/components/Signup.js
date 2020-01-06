import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import fetchPostRequest from "../redux/Action";
import SweetAlert from "sweetalert2-react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      username: "",
      mobile: "",
      description: ""
    };
  }
  removeComponent = e => {
    e.target.parentElement.remove();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = async () => {
    var { fetchPostRequest, data } = this.props;
    let url = "/auth/register";
    let method = "post";
    await fetchPostRequest(url, method, this.state);
    alert(this.props.data.message);
    this.resetInput();
  };
  resetInput = () => {
    this.setState({
      name: "",
      email: "",
      password: "",
      username: "",
      mobile: "",
      description: ""
    });
  };

  render() {
    return (
      <div className="container d-flex justify-content-center flex-column text-white">
        <div className="container col-lg-6 border bg-dark py-4 text-white">
          <h4>Register</h4>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Name"
            name="name"
            className="form-control my-2"
          />
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Email"
            name="email"
            className="form-control  my-2"
          />
          <input
            type="password"
            onChange={this.handleChange}
            placeholder="Password"
            name="password"
            className="form-control  my-2"
          />
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Username"
            name="username"
            className="form-control  my-2"
          />{" "}
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Mobile num"
            name="mobile"
            className="form-control  my-2"
          />
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Description"
            name="description"
            className="form-control  my-2"
          />
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <input
                    onClick={() => this.handleClick()}
                    type="button"
                    value="Signup"
                    className="btn btn-info"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="text-white">
                  Already have an account ? <Link to="/login">Click here</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    data: state.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchPostRequest: (url, method, data, headers) =>
      dispatch(fetchPostRequest(url, method, data, headers))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
