import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchDataAllBlog,
  createNewComment,
  fetchShowComments
} from "../../../redux/action";
import SeeAllComments from "./SeeAllComments";

class BlogCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: "",
      user_fname: "",
      blog_id: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    this.setState(
      {
        user_fname: this.props.authData.fname + " " + this.props.authData.lname,
        blog_id: this.props.id
      },
      () => {
        console.log("------>", this.state);
        this.props.createNewComment(this.state);
        this.setState({
          comments: ""
        });
      }
    );
  };

  // showComments = e => {
  //   let obj = {
  //     blog_id: this.props.id
  //   };
  //   this.props.fetchShowComments(obj);
  //   console.log(this.props.allComments);
  // };

  render() {
    let imgArr = [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1504890001746-a9a68eda46e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1558588942-930faae5a389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1557804483-ef3ae78eca57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    ];
    console.log(this.props);
    return (
      <div class="card mb-3 mr-3" style={{ maxWidth: "580px" }}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src={
                imgArr[this.props.i] ||
                "https://images.unsplash.com/photo-1557804483-ef3ae78eca57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              }
              class="card-img"
              alt="..."
              height="100%"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{this.props.title}</h5>
              <p class="card-text mb-0">{this.props.body}</p>
              <p class="card-text mb-4">
                <small class="text-muted mt-0 pt-0">
                  Created At: {this.props.created_at}
                </small>
              </p>
              <div className="text-right">
                <input
                  className="border-top-0 border-left-0 border-right-0 px-2"
                  type="text"
                  placeholder="Add Comment"
                  onChange={this.handleChange}
                  name="comments"
                  value={this.state.comments}
                />
                <button
                  onClick={this.handleClick}
                  className=" border-0 bg-white text-primary d-inline"
                  // value={`${user_id} ${id}`}
                >
                  <small>Comment</small>
                </button>
                <SeeAllComments id={this.props.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authData: state.authData,
  allComments: state.allComments
});

const mapDispatchToProps = {
  fetchDataAllBlog: fetchDataAllBlog,
  createNewComment: createNewComment,
  fetchShowComments: fetchShowComments
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogCard);
