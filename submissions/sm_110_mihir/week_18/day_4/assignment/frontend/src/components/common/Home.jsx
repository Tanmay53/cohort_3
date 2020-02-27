import { connect } from "react-redux";
import { fetchBlogData } from "../../redux/blog/blog_action";
import React, { Component } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog_title: "",
      content: "",
      category: "1",
      user_id: JSON.parse(localStorage.getItem("user"))["user_id"]
    };

    this.loadBlogs();
  }
  loadBlogs = () => {
    const config = {
      method: "GET",
      url: "http://localhost:5000/show_blogs"
    };
    const result = this.props.fetchBlogData(config);
    console.log(result);
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    console.log("home page ");
  }

  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state);
    const config = {
      method: "POST",
      url: "http://localhost:5000/new_blog",
      data: { ...this.state }
    };
    const result = await this.props.fetchBlogData(config);
    console.log(result);
    this.setState({
      blog_title: "",
      content: "",
      category: "1",
      user_id: JSON.parse(localStorage.getItem("user"))["user_id"]
    });
    this.loadBlogs();
  };
  render() {
    console.log(this.props.data.data);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="bg-primary text-white text-center">
                Create new Blog
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <form
                onSubmit={this.handleSubmit}
                className="form-group p-2 bg-light"
              >
                <input
                  type="text"
                  name="blog_title"
                  placeholder="Enter blog title"
                  onChange={this.handleChange}
                  className="form-control"
                />
                <input
                  type="textarea"
                  name="content"
                  placeholder="write blog"
                  onChange={this.handleChange}
                  className="form-control mt-2"
                />
                <hr />
                <span>category:</span>
                <input
                  type="radio"
                  name="category"
                  value="1"
                  onChange={this.handleChange}
                  checked
                />
                <label htmlFor="category"> General</label>
                <br />
                <button type="submit" className="btn btn-primary text-center">
                  Post blog
                </button>
              </form>
            </div>
          </div>
          <div className="card-deck">
            {this.props.data.data &&
              this.props.data.data.map(ele => (
                <Link to={`/blog/${ele["id"]}`} key={ele["id"]}>
                  <Card
                    img="https://via.placeholder.com/50"
                    body={ele["content"]}
                  />
                </Link>
              ))}
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => this.props.reset()}>
          Logout
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.blog_reducer.data,
    status: state.blog_reducer.status
  };
};
const mapDispatchToProps = { fetchBlogData };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
