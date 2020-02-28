import React, { Component } from "react";
import { connect } from "react-redux";

class CreateNewBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category_id: "",
      user_id: "",
      title: "",
      body: ""
    };
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <select onChange={this.handleChange}>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className="">
            <label htmlFor="title">Title</label>
            <input
              className="w-75 py-2 px-3"
              type="text"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}

            />
          </div>
          <div className="">
            <label htmlFor="title">Title</label>
            <textarea
              className="w-75 py-2 px-3"
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div>
            <button className="py-2 px-4 bg-warning text-dark">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authData: state.authData
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewBlog);
