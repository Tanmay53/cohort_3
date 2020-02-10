/** @format */

import React, { Component } from "react";
import axios from "axios";
export class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      Name: "",
      email: "",
      age: "",
      mobile: "",
      msg: ""
    };
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    console.log(query)
    let id = query.get("id");
    let Name = query.get("Name");
    let email = query.get("email");
    let age = query.get("age");
    let mobile = query.get("mobile");

    this.setState({
      id: id,
      Name: Name,
      email: email,
      age: age,
      mobile: mobile
    });
  }

  handleDelete = () => {
    axios
      .delete(`http://127.0.0.1:5000/users/delete/${this.state.id}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          msg: "deleted successfully"
        });
      })
      .then(e => {
        console.log(e);
      });
  };

  handleDeleted = () => {
    this.props.history.push("/users/listing");
  };

  render() {
    return (
      <div className="container-fluid bg-dark" style={{ height: "100vh" }}>
        <div className="row justify-content-center">
          <div className="col-sm-8 col-md-6 col-lg-4 bg-warning p-5 m-4">
            <h1>Name :{this.state.Name}</h1>
            <h1>age :{this.state.age}</h1>
            <h1>email :{this.state.email}</h1>
            <h1>mobile :{this.state.mobile}</h1>
            <br></br>
            <div>
              <button
                type="button"
                className="btn btn-dark"
                data-toggle="modal"
                data-target="#deleteAlert"
              >
                Delete
              </button>
              <div
                className="modal fade"
                id="#deleteAlert"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Delete Warning!!!!
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
                    <div className="modal-body">
                      Are you sure you want to delete?
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => this.handleDelete()}
                        data-dismiss="modal"
                        data-toggle="modal"
                        data-target="#Confirmation"
                      >
                        Yes Delete it
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Modal title
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
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-success"
                          data-dismiss="modal"
                          onClick={() => this.handleDeleted()}
                        >
                          Go to home
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Delete;
