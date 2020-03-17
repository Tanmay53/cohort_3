import React, { Component } from "react";
import { connect } from "react-redux";
import { jobeditedDetail } from "../Redux/Action";

class JobEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
        editedDetail :{
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
    const { editedDetail } = this.state;
    const obj = { ...editedDetail, [e.target.name]: e.target.value };
    this.setState({
      editedDetail: obj
    });
  };

  handleClick = e => {
    e.preventDefault();
    const { editedDetail } = this.state;
    const { sendJobeditedDetail } = this.props;
    sendJobeditedDetail(editedDetail);
    this.props.history.push("/home")
  };

  render() {
    const { data } = this.props;
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
                Job Edit
              </h3>
              <small className="text-danger">please update all field</small>
            </center>
            <hr />
            <form>
              <center>
                <label className="m-2">
                  COMPANY NAME
                  <input
                    type="text"
                    name="name"
                    defaultValue={data[0].name}
                    value={this.state.name}
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
                    defaultValue={data[0].location}
                    value={this.state.location}
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
                    defaultValue={data[0].jobtitle}
                    value={this.state.jobtitle}
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
                    defaultValue={data[0].id}
                    value={this.state.id}
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
                    defaultValue={data[0].openings}
                    value={this.state.openings}
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
                    defaultValue={data[0].salary}
                    value={this.state.salary}
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
const mapStateToProps = (state) => ({
  data:state.edit
})

const mapDispatchToProps = dispatch => ({
  sendJobeditedDetail: editedDetail =>
    dispatch(jobeditedDetail(editedDetail))
});

export default connect(mapStateToProps, mapDispatchToProps)(JobEdit);

