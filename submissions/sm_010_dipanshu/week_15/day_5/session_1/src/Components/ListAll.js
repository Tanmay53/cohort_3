import React from "react";
import * as $ from "jquery";
import "bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL as URL } from "../BaseURL";

class ListAll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      display: false,
      noUsers: false,
      apiResponseMessage: ""
    };
  }

  displayState = () => {
    setTimeout(() => {
      console.log("State Updated =>");
      console.log("State: Display Flag", this.state.display);
      console.log("State: users", this.state.users);
    }, 1);
  };

  componentDidMount() {
    let itemsReturned = false;

    const config = {
      baseURL: URL,
      url: "/list/all",
      method: "GET",
      timeout: 10000
    };

    axios(config)
      .then(res => {
        let users = res.data.data;
        let statusCode = res.data.status;
        let apiResponseMessage = res.data.message;

        if (statusCode === 400) {
          this.setState({
            apiResponseMessage: apiResponseMessage
          });

          $("#showUsersModal").modal();
        } else if (users.length === 0) {
          console.log("No more users left");
          this.setState({
            noUsers: true,
            display: true
          });
        } else if (statusCode === 200) {
          itemsReturned = true;

          this.setState({
            users: users,
            display: itemsReturned,
            noUsers: false
          });
        }
      })
      .catch(err => {
        console.log("Error occured =>", err.message);
      });
  }

  render() {
    if (!this.state.display) {
      return (
        <div
          className="modal fade"
          id="showUsersModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Failure
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{this.state.apiResponseMessage}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.noUsers) {
      return (
        <div>
          <h1 className="mt-5 text-center text-danger">No users present</h1>
        </div>
      );
    } else if (this.state.display) {
      return (
        <div>
          <div className="col-9 mx-auto mt-5 shadow shadow-lg table-striped table-bordered table-responsive table-hover p-0 mb-5">
            <table className="table mb-0">
              <thead className="thead-dark text-center">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user, index) => {
                  return (
                    <tr key={user.name + index} className="text-center">
                      <th className="align-middle">{user.id}</th>
                      <th className="align-middle">{user.name}</th>
                      <td className="align-middle">{user.email}</td>
                      <td className="align-middle">{user.mobile}</td>
                      <td className="align-middle">{user.age}</td>
                      <td className="text-center">
                        <Link to={`/users/show/${user.id}`}>
                          <button className="btn btn-outline-success rounded-0 mr-4">
                            Show
                          </button>
                        </Link>
                        <Link to={`/users/edit/${user.id}`}>
                          <button className="btn btn-outline-primary rounded-0 mr-4">
                            Edit
                          </button>
                        </Link>
                        <Link to={`/users/delete/${user.id}`}>
                          <button className="btn btn-outline-danger rounded-0">
                            Delete
                          </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}
export default ListAll;
