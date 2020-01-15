import React, { Component } from "react";
import axios from "axios";
import GithubInputUser from "./Components/GithubInputUser";
import GithubInputRepo from "./Components/GithubInputRepo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      reposName: "",
      userArr: [],
      repoArr: [],
      flag: false
    };
  }
  fetchUserProfile = e => {
    e.preventDefault();
    this.setState({
      userName: "",
      userArr: []
    });
    axios
      .get(`https://api.github.com/search/users?q=${this.state.userName}`)
      .then(res => {
        this.state.userArr.push(res.data.items);
        console.log(res.data.items[0].login);
        console.log("user array ", this.state.userArr[0].login);
        this.setState({
          flag: true,
          userArr: this.state.userArr[0]
        });
      })
      .catch(err => {
        console.log(err);
      });
    // console.log("user array ", this.state.userArr);
  };

  fetchUserRepos = e => {
    e.preventDefault();
    this.setState({
      userName: "",
      repoArr: []
    });
    axios
      .get(`https://api.github.com/search/users?q=${this.state.reposName}`)
      .then(res => {
        console.log(res.data.items);
        this.state.repoArr.push(res.data.items);
        this.setState({
          repoArr: this.state.repoArr[0]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  userInputHandler = e => {
    this.setState({
      userName: e.target.value
    });
  };

  reposInputHandler = e => {
    this.setState({
      reposName: e.target.value
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="">
          <h1 className="text-center pt-5 pb-2">GitHub Finder</h1>
          <p className="text-center  pb-3">
            Search user by its username or repository name
          </p>
          <div className="pb-3">
            <GithubInputUser
              value={this.state.userName}
              changed={e => this.userInputHandler(e)}
              click={e => this.fetchUserProfile(e)}
              showResult={this.state.userArr}
              flag={this.state.flag}
            />
          </div>
          <h3 className="ml-5 pl-5">OR</h3>
          <div className="">
            <GithubInputRepo
              value={this.state.reposName}
              changed={e => this.reposInputHandler(e)}
              click={e => this.fetchUserRepos(e)}
              showResult={this.state.repoArr}
              flag={this.state.flag}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
