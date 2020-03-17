import React, { Component } from "react";
import { connect } from "react-redux";
import { jobDetail } from "../Redux/Action";

class JobEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
        detail :{
          name: "",
          location: "",
          jobtitle: "",
          openings: "",
          salary: "",
          id:""
        }
    };
  }

  handleChange = e => {
    const { detail } = this.state;
    const obj = { ...detail, [e.target.name]: e.target.value };
    this.setState({
      detail: obj
    });
  };

  handleClick = e => {
    e.preventDefault();
    const { detail } = this.state;
    const { sendJobDetail } = this.props;
    sendJobDetail(detail );
    this.props.history.push("/home")
  };

  render() {
    const { name, location, jobtitle, openings, salary, id } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-3" />
          <div
            className="col-6 mt-3 shadow p-3 mb-5 bg-black rounded"
            style={{ border: "1px solid black" }}
          >
            <center>
              <h3 className="m-2" style={{ fontFamily: "Herculanum" }}>
                Job Details
              </h3>
            </center>
            <hr />
            <form>
              <center>
                <label className="m-2">
                  COMPANY NAME
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    className="form-control m-2"
                  />
                </label>
              </center>
              <center>
                <label className="m-2">
                  LOCATION
                  <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={this.handleChange}
                    className="form-control m-2"
                  />
                </label>
              </center>
              <center>
                <label className="m-2">
                  JOB TITLE
                  <input
                    type="text"
                    name="jobtitle"
                    value={jobtitle}
                    onChange={this.handleChange}
                    className="form-control m-2"
                  />
                </label>
              </center>
              <center>
                <label className="m-2">
                  UNIQUE JOB ID <small className="text-danger"> (Please enter unique job id)</small>
                  <input
                    type="number"
                    name="id"
                    value={id}
                    onChange={this.handleChange}
                    className="form-control m-2"
                  />
                </label>
              </center>
              <center>
                <label className="m-2">
                  OPENINGS
                  <input
                    type="number"
                    name="openings"
                    value={openings}
                    onChange={this.handleChange}
                    className="form-control m-2"
                  />
                </label>
              </center>

              <center>
                <label className="m-2">
                  SALARY
                  <input
                    type="number"
                    name="salary"
                    value={salary}
                    onChange={this.handleChange}
                    className="form-control m-2"
                  />
                </label>
              </center>
              <center>
                <input
                  type="submit"
                  onClick={this.handleClick}
                  className="m-2 mb-3 btn btn-success"
                />
              </center>
            </form>
          </div>
          <div className="col-3" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendJobDetail: details =>
    dispatch(jobDetail(details))
});

export default connect(null, mapDispatchToProps)(JobEntry);

