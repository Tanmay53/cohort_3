import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCommentData } from "../../redux/comment/comment_action";

export class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      blog_id: Number(this.props.match.params["id"]),
      user_id: JSON.parse(localStorage.getItem("user"))["user_id"],
      data: this.props.blogs.data.find(
        ele => ele["id"] === Number(this.props.match.params["id"])
      )
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const config = {
      method: "POST",
      url: "http://localhost:5000/new_comment",
      data: {
        content: this.state.content,
        blog_id: this.state.blog_id,
        user_id: this.state.user_id
      }
    };
    const result = this.props.fetchCommentData(config);
    console.log(result);
    this.setState({
      content: ""
    });
  };
  render() {
    // const id = Number(this.props.match.params["id"]);
    // const data = this.props.data.data.find(ele => ele["id"] === id);

    return (
      <div>
        <h1>Blog page</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              Author:{this.state.data["name"]}
            </div>
            <div className="col-md-4 col-12">
              Published On:{this.state.data["published_on"]}
            </div>
            <div className="col-md-4 col-12">
              Last Updated:{this.state.data["updated_on"]}
            </div>
          </div>
          <div className="row bg-light border">
            <div className="col">{this.state.data["title"]}</div>
          </div>
          <div className="row bg-light border">
            <div className="col">{this.state.data["content"]}</div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <hr />
              <h5>comments</h5>
              <form onSubmit={this.handleSubmit} className="form-group">
                <input
                  type="text"
                  name="content"
                  onChange={e => this.setState({ content: e.target.value })}
                  placeholder="Enter your comments"
                  className="form-control"
                />
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    blogs: state.blog_reducer.data,
    status: state.blog_reducer.status,
    comments: state.comment_reducer.data
  };
};
const mapDispatchToProps = { fetchCommentData };

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
