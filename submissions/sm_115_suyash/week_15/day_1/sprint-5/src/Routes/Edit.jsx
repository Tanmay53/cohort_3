import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTopic } from "../redux/action";
import { Link } from "react-router-dom";

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      comment: [],
      category: "",
      addComment: "",
      userDetails: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    }); 
  };

  handleClick = () => {
    // console.log(
    //   "start ----------- updating",
    //   this.state,
    //   this.props.match.params.id
    // );
    let obj = {
      title: this.state.title,
      body: this.state.body,
      category: this.state.category,
      comment: [...this.state.comment, this.state.addComment],
      userDetails: this.state.userDetails
    };
    console.log(obj);
    this.props.updateTopic(obj, this.props.match.params.id);
    this.setState({
      title: "",
      body: "",
      category: "",
      addComment: "",
      userDetails: ""
    });
  };

  componentDidMount = () => {
    // console.log("Edit call");
    let id = this.props.match.params.id;
    let data = this.props.topicList.find((item, i) => {
      if (id == i) {
        return item;
      }
    });
    this.setState({
      title: data.title,
      body: data.body,
      category: data.category,
      userDetails: data.userDetails,
      id: data.id,
      comment: data.comment
    });
  };
  render() {
    return (
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h1 className="pt-5 pb-3">Edit Topic</h1>
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
          <div>Category</div>
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
          <div>Add Comment</div>
          <div>
            <input
              className="px-4 py-2 my-2 rounded "
              type="text"
              value={this.state.addComment}
              onChange={e => this.handleChange(e)}
              name="addComment"
            />
          </div>
          <div className="ml-4 mt-4">
            <button
              className="py-2 px-3 btn btn-outline-dark mx-2"
              onClick={this.handleClick}
            >
              Edit Topic
            </button>
            <Link className="py-2 px-3 btn btn-outline-dark mx-2" to="/view">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  topicList: state.topicList
});

const mapDispatchToProps = dispatch => ({
  updateTopic: (payload, id) => dispatch(updateTopic(payload, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
