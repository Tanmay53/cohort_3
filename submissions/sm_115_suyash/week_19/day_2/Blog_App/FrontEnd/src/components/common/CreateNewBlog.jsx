import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewBlog } from "../../redux/action";

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

  componentDidMount() {
    this.setState({
      user_id: this.props.authData.id
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.createNewBlog(this.state)
  };

  render() {
    return (
      <div>
        <h2 className="text-center font-weight-normal mt-4 text-muted">Let's Start Writing Your Own Blog</h2>
        <form onSubmit={this.handleSubmit} className="mx-3 mt-3">
          <div>
            <select
              className="py-2 px-3 border-primary rounded "
              onChange={this.handleChange}
              name="category_id"
              value={this.state.category_id}
            >
              <option value="">Select Categories</option>
              <option value="11">Managements</option>
              <option value="12">Technology</option>
              <option value="13">Economy Networks</option>
              <option value="14">Social Networks</option>
            </select>
          </div>
          <div className="mt-3">
            <label className="d-block" htmlFor="title">
              Title
            </label>
            <input
              className="w-100 py-2 px-3 border-primary rounded"
              type="text"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
              style={{}}
            />
          </div>
          <div className="mt-3">
            <label className="d-block" htmlFor="title">
              Description
            </label>
            <textarea
              className="w-100  py-2 px-3 border-primary rounded"
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
              style={{height:"35vh"}}
            ></textarea>
          </div>
          <div className="mt-3">
            <button className="py-2 px-4 bg-warning text-dark border-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authData: state.authData,
  message:state.blogSuccess
});

const mapDispatchToProps = {
  createNewBlog: createNewBlog
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewBlog);
