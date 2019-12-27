import React, { Component } from "react";
const Repos = props => {
  return (
    <>
      {/* <h4>

      </h4> */}
      <>
        <td>
          <a href={props.data.html_url}>{props.data.name}</a>
        </td>
        <td className="d-flex col-6 flex-wrap">{props.data.description}</td>
        <td>{props.data.language}</td>
        <td>{props.data.created_at}</td>
        <td>{props.data.updated_at}</td>
      </>
    </>
  );
};
var languageArr = [];
export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repoName: "",
      matchLanguage: "",
      langArr: languageArr
    };
  }
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount() {
    this.props.profileData.map(ele => {
      if (!languageArr.includes(ele.language)) {
        languageArr.push(ele.language);
      }
    });
  }

  render() {
    return (
      <div className="p-2 container row">
        <div className="col-4 card">
          <div className="col-10">
            <img
              src={this.props.profile.avatar_url}
              alt=""
              className="img-fluid"
            />
            <h4>{this.props.profile.login}</h4>
            <a href={this.props.profile.html_url} className="btn btn-success">
              Show Profile
            </a>
          </div>
        </div>
        <div className="col-8">
          <h2 className="bg-dark text-center text-white">Repositories</h2>
          <div className="row col-8">
            <div className="d-flex">
              <input
                type="text"
                placeholder="search by repos"
                name="repoName"
                onChange={this.change}
                value={this.state.repoName}
                className="form-control"
              />
              <input
                type="submit"
                onClick={() => this.props.change(this.state.repoName)}
                className="mx-1 btn btn-outline-info"
                value="Search"
              />
            </div>
            <h4>Choose Language</h4>
            <div className="d-flex">
              <select
                name="matchLanguage"
                className="custom-select col-4"
                onChange={this.change}
                value={this.state.matchLanguage}
              >
                {this.data ||
                  this.state.langArr.map(ele => {
                    return <option value={ele}>{ele}</option>;
                  })}
              </select>
              <button
                className="btn btn-outline-info col-7 mx-1"
                onClick={() =>
                  this.props.changeLanguase(this.state.matchLanguage)
                }
              >
                Language Search
              </button>
            </div>
          </div>
          <table className="table border border-dark shadow">
            <thead className="border border-dark ">
              <tr className="bg-dark text-white">
                <td>Repo Name</td>
                <td>Description</td>
                <td>Languages</td>
                <td>Created At</td>
                <td>Last Update</td>
              </tr>
            </thead>
            <tbody className="col-8 p-3">
              {this.props.profileData.map(ele => {
                return (
                  <tr>
                    <Repos data={ele} />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Profile;
