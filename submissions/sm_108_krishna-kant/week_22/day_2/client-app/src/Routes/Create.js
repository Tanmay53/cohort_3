import React, { Component } from "react";
import { connect } from "react-redux";
import { addTweet, toggleIs } from "../redux/actions/tweets";
import { Redirect } from "react-router-dom";
class Create extends Component {
  state = {
    title: "",
    body: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentWillMount() {
    this.props.toggleIs();
  }

  handleSubmit = e => {
    e.preventDefault();
    let { addTweet, user } = this.props;
    let data = { ...this.state };
    data.id = user.id;
    addTweet(data);

    // Reset Form
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      title: "",
      body: ""
    });
  };

  render() {
    const { title, body } = this.state;
    if (this.props.isPosted) {
      return <Redirect to="/tweets"></Redirect>;
    }
    return (
      <div>
        <div className="container">
          <div className="row p-5">
            <div className="col-lg-4 col-md-8 col-sm-12 offset-lg-4 card py-4 text-left">
              <form className="mx-auto" onSubmit={this.handleSubmit}>
                <h3>Create A Tweet</h3>
                <div className="form-group">
                  <label> Title</label>
                  <input
                    type="title"
                    placeholder="Enter Title"
                    required
                    className="form-control"
                    name="title"
                    value={title}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label> Body</label>
                  <input
                    type="body"
                    placeholder="Enter Body"
                    required
                    className="form-control"
                    name="body"
                    value={body}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Add Tweet"
                    className="btn btn-primary btn-block"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  isPosted: state.tweets.isPosted
});

export default connect(mapStateToProps, { addTweet, toggleIs })(Create);
