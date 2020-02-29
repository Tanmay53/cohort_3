import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDataAllBlog } from "../../redux/action";
import BlogCard from "./extra/BlogCard";

class AllBlogs extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchDataAllBlog();
  }


  render() {
    console.log("render==========>>>", this.props.allBlogData);
    return (
      <div className="d-flex flex-wrap">
        {this.props.allBlogData.map((ele, i) => {
          return (
            <BlogCard key={ele.id} title={ele.title} body={ele.body} created_at={ele.created_at} id={ele.id} user_id={ele.user_id} i={i} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allBlogData: state.allBlogData
});

const mapDispatchToProps = {
  fetchDataAllBlog: fetchDataAllBlog
};

export default connect(mapStateToProps, mapDispatchToProps)(AllBlogs);
