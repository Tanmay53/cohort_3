import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDataMyBlog } from "../../redux/action";
import BlogCard from "./extra/BlogCard";

class MyBlogs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: ""
    };
  }

  componentDidMount() {
    this.setState(
      {
        user_id: this.props.authData.id
      },
      () => {
        this.props.fetchDataMyBlog(this.state);
      }
    );
  }
  render() {
    console.log(this.props.myBlogData)
    return (
      <div>
        {this.props.myBlogData.map((ele,i) => {
          return (
            <BlogCard key={ele.id} title={ele.title} body={ele.body} created_at={ele.created_at} id={ele.id} user_id={ele.user_id} i={i} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authData: state.authData,
  myBlogData: state.myBlogData
});

const mapDispatchToProps = {
  fetchDataMyBlog: fetchDataMyBlog
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBlogs);
