import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDataAllBlog } from "../../redux/action";

class AllBlogs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.props.fetchDataAllBlog();
  }

  render() {
    console.log("render==========>>>", this.props.allBlogData);
    return <div></div>;
  }
}

const mapStateToProps = state => ({
  allBlogData: state.allBlogData
});

const mapDispatchToProps = {
  fetchDataAllBlog: fetchDataAllBlog
};

export default connect(mapStateToProps, mapDispatchToProps)(AllBlogs);
