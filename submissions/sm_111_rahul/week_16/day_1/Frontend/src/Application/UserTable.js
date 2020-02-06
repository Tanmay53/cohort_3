/** @format */

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDataList: [],
      status: false,
      dataPerPage: "",
      pageNo: "",
      pagination: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    axios
      .get("http://127.0.0.1:5000/users/listing", {
        params: {
          per_page: e.target.value,
          page_no: this.state.pageNo
        }
      })
      .then(res => {
        const data = res.data;
        console.log(data);
        console.log(data.user_list_display);
        const pages = data.pages;
        console.log(res);
        this.setState({
          userDataList: [...data.user_list_display],
          status: true,
          pagination: pages
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    if (this.props.location.search == "") {
      axios
        .get("http://localhost:5000/users/listing", {})
        .then(res => {
          const data = res.data;
          console.log(data.user_list_display);
          this.setState({
            userDataList: [...data.user_list_display],
            status: true
          });
        })
        .catch(err => console.log(err));
      console.log(this.state.userDataList);
    } else {
      this.clickToGetData();
    }
  }

  componentDidUpdate = prevProps => {
    if (this.props.location.search != prevProps.location.search) {
      this.clickToGetData();
    }
  };

  clickToGetData = () => {
    let array = this.props.location.search.split("=");
    let dataPerPageSplit = array[1].split("&");
    let dataPerPage = Number(dataPerPageSplit[0]);
    let pageNo = Number(array[2]);
    console.log(dataPerPage, pageNo);
    this.setState({
      dataPerPage: dataPerPage
    });

    axios
      .get("http://localhost:5000/users/listing", {
        params: {
          per_page: dataPerPage,
          page_no: pageNo
        }
      })
      .then(res => {
        console.log(res);
        const data = res.data;
        this.setState({
          userDataList: data.user_list_display,
          status: true,
          pagination: data[1]
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  gotoShow = user => {
    this.props.history.push(
      `/users/show/${user.id}?id=${user.id}&Name=${user.name}&email=${user.email}&mobile=${user.mobile}&age=${user.age}`
    );
  };

  gotoDelete = user => {
    this.props.history.push(
      `/users/delete/${user.id}?id=${user.id}&Name=${user.name}&email=${user.email}&mobile=${user.mobile}&age=${user.age}`
    );
  };

  gotoEdit = user => {
    this.props.history.push(
      `/users/edit/${user.id}?id=${user.id}&Name=${user.name}&email=${user.email}&mobile=${user.mobile}&age=${user.age}`
    );
  };

  render() {
    let pagination = Number(this.state.pagination);
    let pages = [];
    for (let i = 1; i < pagination + 1; i++) {
      pages.push(
        <li className="page-item m-2">
          <Link
            to={`/users/listing/?per_page=${this.state.dataPerPage}&page_no=${i}`}
            className="btn btn-primary p-1"
          >
            {i}
          </Link>
        </li>
      );
    }
    return (
      <div className="container-fluid bg-dark " style={{ height: "100vh" }}>
        <div className="display-3 text-center bg-dark text-warning p-2">
          Users Databook
        </div>
        <div className="row justify-content-center p-3">
          <Link to="/users/create">
            <button type="button" className="btn btn-warning m-2">
              Create User
            </button>
          </Link>
        </div>
        <div className="row justify-content-center">
          <h1 className="text-light">Select Data Per Page</h1>
          <div className="mx-4 my-2">
            <select
              className="form-control"
              name="dataPerPage"
              value={this.state.dataPerPage}
              onChange={this.handleChange}
            >
              <option>Select</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
        <div className="table-responsive">
          <table className="bg-warning text-dark table container p-2 h3 ">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Age</th>
                <th>Delete User</th>
                <th>Update User</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {this.state.status ? (
                this.state.userDataList.map(user => (
                  <tr id={user.id}>
                    <td>{user.id}</td>
                    <td>{user.Name}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>{user.age}</td>
                    <td>
                      <button
                        className="text-danger"
                        onClick={user => this.gotoDelete(user)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-light" onClick={this.gotoEdit}>
                        Edit
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-light" onClick={this.gotoShow}>
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>No data</td>
                </tr>
              )}
            </tbody>
          </table>
          <ul className="pagination">
            <div className="row justify-content-center m-1">{pages}</div>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserTable;
