import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewTweet } from "../../redux/action";

class AddNewTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new_post: "",
      user_id: 0
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addNew = () => {
    this.setState(
      {
        user_id: this.props.user.id
      },
      () => {
        this.props.addNewTweet(this.state);
        this.setState({
          new_post: ""
        });
      }
    );
  };
  render() {
    return (
      <div>
        <h1 className="text-center">Create New Post</h1>
        <input
          type="text"
          placeholder="Enter Your Tweets"
          onChange={this.handleChange}
          name="new_post"
          className="ml-3"
          value={this.state.new_post}
        />
        <button
          className="ml-3 px-3 py-2 text-white btn-dark"
          onClick={this.addNew}
        >
          Add Post
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  addNewTweet: payload => dispatch(addNewTweet(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTweet);
