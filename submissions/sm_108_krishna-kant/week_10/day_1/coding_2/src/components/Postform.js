import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postAction';

class Postform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    // Action
    const { createPost } = this.props;

    createPost(post);
  };
  render() {
    return (
      <div>
        <h1>Post Form</h1>
        <p>Add Post</p>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title : </label>
            <br />
            <input
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Body : </label>
            <br />
            <textarea
              type='text'
              name='body'
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <button type='submit'>Save</button>
        </form>
      </div>
    );
  }
}

Postform.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(Postform);
