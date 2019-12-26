import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/postAction';
import PropTypes from 'prop-types';
class Posts extends React.Component {
  componentDidMount() {
    const { fetchPost } = this.props;
    fetchPost();
  }

  componentDidUpdate(newProps) {
    if (this.props.newPost != newProps.newPost) {
      console.log(newProps.newPost);
      this.props.posts.unshift(newProps.newPost);
    }
  }
  render() {
    const postItem = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItem}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPost })(Posts);
