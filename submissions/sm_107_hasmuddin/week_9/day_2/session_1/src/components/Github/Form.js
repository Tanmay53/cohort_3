import React, { Component } from "react";
import axios from "axios";
import SearchedUser from "./SearchedUser";
import Profile from "./Profile";
export class Form extends Component {
  constructor(props) {
    super(props);
    this.profileData = [];
    this.state = {
      data: [],
      username: "",
      profileD: this.profileData,
      profile: [],
      toggle: "false"
    };
  }
  handleClick = async (repolink, profileLink) => {
    console.log(repolink);
    await axios
      .get(repolink)
      .then(result => (this.profileData = result.data))
      .catch(error => console.log(error));
    this.setState({
      toggle: !this.state.toggle,
      profileD: this.profileData
    });
    console.log(this.state.profileData);
    await axios.get(profileLink).then(re =>
      this.setState({
        profile: re.data
      })
    );
    console.log(this.state);
  };

  submit = async username => {
    await axios
      .get(`https://api.github.com/search/users?q=${username}`)
      .then(res => this.setState({ data: res.data.items }))
      .catch(err => console.log(err));
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  change = input => {
    let filterArr;
    filterArr = this.profileData.filter(ele => {
      return ele.name == input;
    });
    this.setState({
      profileD: filterArr
    });
  };
  changeLanguase = language => {
    let filterLang;
    filterLang = this.profileData.filter(ele => {
      return ele.language == language;
    });
    this.setState({
      profileD: filterLang
    });
  };

  render() {
    if (!this.state.toggle) {
      return (
        <Profile
          change={this.change}
          profile={this.state.profile}
          key={this.state.profile.avatar_url}
          profileData={this.state.profileD}
          changeLanguase={this.changeLanguase}
        />
      );
    } else {
      return (
        <div>
          <div className="row bgdark px-3">
            <div className="col-lg-1 col-md-2 col-2">
              <img
                src="data:image/png;base64,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"
                alt="github-icon"
                className="img-fluid"
              />
            </div>
            <h3 className="my-2 col-8">Github Search Engine</h3>
          </div>
          <div>
            <div className="col-6 d-flex m-5 border p-3 bg-dark">
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Type username"
                onChange={this.handleChange}
                value={this.state.username}
              />
              <input
                type="submit"
                value="Search"
                onClick={() => {
                  this.submit(this.state.username);
                }}
                className="btn btn-success mx-2"
              />
            </div>
          </div>
          <div className="container mx-5 p-3 row col-12">
            {this.data ||
              this.state.data.map(ele => {
                return (
                  <SearchedUser
                    key={ele.id}
                    data={ele}
                    click={this.handleClick}
                  />
                );
              })}
          </div>
        </div>
      );
    }
  }
}

export default Form;
