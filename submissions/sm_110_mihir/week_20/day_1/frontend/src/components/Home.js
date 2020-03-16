import React, { Component } from "react";
import { fetchData } from "../redux/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: "/",
      title: ""
    };
  }

  componentDidMount = () => {
    const config = {
      method: "post",
      url: "http://localhost:5000/children",
      data: {
        path: "/"
      }
    };
    this.props.fetchData(config);
  };

  handleClick = (e, path) => {
    this.setState({
      path: path
    });
    e.preventDefault();
    const config = {
      method: "post",
      url: "http://localhost:5000/children",
      data: {
        path: path
      }
    };
    this.props.fetchData(config);
  };

  goBack = e => {
    e.preventDefault();
    let path = this.state.path.split("/");
    path.shift();
    path.pop();
    console.log("path:", path);
    let newPath = "/";
    for (let i = 0; i < path.length - 1; i++) newPath += path[i] + "/";
    console.log("newPath:", newPath);
    this.handleClick(e, newPath);
  };

  handleSubmit = e => {
    e.preventDefault();
    const config = {
      method: "post",
      url: "http://localhost:5000/create_folder",
      data: this.state
    };
    this.props.fetchData(config);
    this.setState({
      title: ""
    });
  };
  render() {
    const breadcrum = this.props.data[0];
    return (
      <div>
        <h1 className="bg-primary text-white">File Browser</h1>
        <h3>{breadcrum && breadcrum["path"]}</h3>
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="bg-success">Create New Folder</h3>
              <form onSubmit={this.handleSubmit} className="form-group">
                <label htmlFor="title">Folder Name</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={this.state.title}
                  onChange={e =>
                    this.setState({
                      title: e.target.value
                    })
                  }
                />
                <button className="btn btn-success" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        {this.props.data.map(ele =>
          ele["id"] !== 0 ? (
            <button
              className="btn btn-primary m-2"
              onClick={e =>
                this.handleClick(e, ele["path"] + ele["title"] + "/")
              }
              key={ele["id"]}
            >
              {ele["title"]}
            </button>
          ) : (
            <div className="bg-light p-3 border">{ele["title"]}</div>
          )
        )}
        <br />
        <br />
        <button className="btn btn-success" onClick={this.goBack}>
          Back
        </button>
      </div>
    );
  }
}

const mapStatetoPorps = state => {
  return {
    data: state.data
  };
};
export default connect(mapStatetoPorps, { fetchData })(Home);
