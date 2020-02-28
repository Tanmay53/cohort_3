import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDataMyBlog } from "../../redux/action";

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
        this.props.fetchDataMyBlog(this.state );
      }
    );
  }
  render() {
    return <div>My Blogs</div>;
  }
}

const mapStateToProps = state => ({
  authData: state.authData
});

const mapDispatchToProps = {
  fetchDataMyBlog: fetchDataMyBlog
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBlogs);
