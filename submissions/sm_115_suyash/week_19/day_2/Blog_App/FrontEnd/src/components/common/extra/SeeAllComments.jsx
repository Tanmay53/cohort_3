import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchShowComments } from "../../../redux/action";

class SeeAllComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
  }

  showComments = e => {
    let obj = {
      blog_id: this.props.id
    };
    this.props.fetchShowComments(obj);
    console.log(this.props.allComments);
  };

  render() {
    console.log("======------->>>", this.props.id);
    return (
      <div>
        <button
          onClick={this.showComments}
          className="ml-0 pl-0 mt-2 border-0 bg-white text-primary d-inline"
        >
          <small>View All Comments</small>
        </button>
        <div className="card-text mt-2">
          {this.props.allComments.map(ele => {
            if (ele.blog_id == this.props.id) {
              return (
                <div>
                  <p className="text-dark mb-0 pb-0"><small>{ele.user_fname}</small></p>
                  <p className="text-muted mt-1">{ele.comment}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allComments: state.allComments
});

const mapDispatchToProps = {
  fetchShowComments: fetchShowComments
};

export default connect(mapStateToProps, mapDispatchToProps)(SeeAllComments);
