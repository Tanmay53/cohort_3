import React, { Component } from "react";
import { connect } from "react-redux";
import { addTopic } from "../redux/action";
import { Redirect } from "react-router-dom";

class AddVehicle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      category: "",
      userDetails: "",
      comment: [],
      id: Date.now()
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    let Topic = {
      title: this.state.title,
      body: this.state.body,
      category: this.state.category,
      userDetails: this.state.userDetails,
      comment: [],
      id: Date.now()
    };
    this.props.addTopic(Topic);
    this.setState({
      title: "",
      body: "",
      category: "",
      userDetails: ""
    });
  };

  render() {
    return this.props.isAuth ? (
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h1 className="pt-5 pb-3">Add Topic</h1>
        <div className="">
          <div>Title</div>
          <div>
            <input
              className="px-4 py-2 my-2 rounded "
              type="text"
              value={this.state.title}
              onChange={e => this.handleChange(e)}
              name="title"
            />
          </div>
        </div>
        <div>
          <div>Body</div>
          <div>
            <input
              className="px-4 py-2 my-2 rounded "
              type="text"
              value={this.state.body}
              onChange={e => this.handleChange(e)}
              name="body"
            />
          </div>
          <div>Manufacturer</div>
          <div>
            <input
              className="px-4 py-2 my-2 rounded "
              type="text"
              value={this.state.category}
              onChange={e => this.handleChange(e)}
              name="category"
            />
          </div>
          <div>User Details</div>
          <div>
            <input
              className="px-4 py-2 my-2 rounded "
              type="text"
              value={this.state.userDetails}
              onChange={e => this.handleChange(e)}
              name="userDetails"
            />
          </div>
          <div className="ml-4 mt-4">
            <button
              className="py-2 px-5 btn btn-outline-dark"
              onClick={this.handleClick}
            >
              Add Topic
            </button>
          </div>
        </div>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}
const mapStateToProps = state => ({
  isAuth: state.isAuth
});

const mapDispatchToProps = dispatch => ({
  addTopic: payload => dispatch(addTopic(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddVehicle);
