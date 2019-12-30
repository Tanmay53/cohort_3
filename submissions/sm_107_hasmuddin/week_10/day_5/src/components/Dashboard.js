import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import fetchPostRequest from "../redux/Action";
import fetchSuccess from "../redux/Action";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log("dashboard", this.props.state);
  }
  //   description: "cool dude"
  //   email: "mdaliansari33@gmail.com"
  //   mobile: "98911111233"
  //   name: "ayaan"
  //   token: "32c2e23506971d6e6aeeb6981fa36c50"
  //   username: "ayaan123"

  render() {
    console.log(this.state);
    return (
      <div className="container d-flex justify-content-center align-items-center">
        <div className="container col-6">
          <h2>User Information</h2>
          <table className="table border p-2 bg-dark ">
            <tr>
              <td>
                <ul className="list-group">
                  <li className="list-group-item">Name</li>
                  <li className="list-group-item">Email</li>
                  <li className="list-group-item">Username</li>
                  <li className="list-group-item">Mobile</li>
                  <li className="list-group-item">Description</li>
                </ul>
              </td>
              <td>
                <ul className="list-group">
                  <li className="list-group-item">{this.props.data.name}</li>
                  <li className="list-group-item">{this.props.data.email}</li>
                  <li className="list-group-item">
                    {this.props.data.username}
                  </li>
                  <li className="list-group-item">{this.props.data.mobile}</li>
                  <li className="list-group-item">
                    {this.props.data.description}
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>

        <Link style={{ color: "white" }} to="/">
          <button className="bg-dark text-white px-3">Logout</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    data: state.data,
    token: state.data.token,
    isLoading: state.isLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchPostRequest: (url, method, data, headers) =>
      dispatch(fetchPostRequest(url, method, data, headers)),
    fetchSuccess: data => dispatch(fetchSuccess(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
