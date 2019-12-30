import React from "react";
import UserInput from "./components/UserInput";
import UserTable from "./components/UserTable";
import UserInfo from "./components/UserInfo";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: "user",
      resultsFetchedFlag: false,
      result: [],
      profileToDisplay: -1,
      profile: null
    };
  }

  changeFetchState = (view, state, fetchedUsers, profileToDisplay, profile) => {
    console.log(
      "Results received from component. view =>",
      view,
      "state =>",
      state,
      "fetchedUsers",
      fetchedUsers,
      "profileToDisplay",
      profileToDisplay,
      "profile",
      profile
    );

    console.log("Changing state in App.js");
    this.setState({
      view: view,
      resultsFetchedFlag: state,
      result: fetchedUsers,
      profileToDisplay: profileToDisplay,
      profile: profile
    });

    setTimeout(() => {
      console.log(
        "State changed =>",
        "resultsFetchedFlag =>",
        this.state.resultsFetchedFlag,
        "result =>",
        this.state.result
      );
    }, 1);
  };

  changeProfileState = (state, profile) => {
    console.log(
      "Results received from user table component. state =>",
      state,
      "results about user =>",
      profile
    );

    console.log("Changing state in App.js");
    this.setState({
      profileToDisplay: state,
      profile: profile
    });
  };

  render() {
    console.log("==================State is=================", this.state);

    if (this.state.view === "user") {
      if (this.state.resultsFetchedFlag) {
        return (
          <div>
            <UserInput returnFunction={this.changeFetchState} />
            <div className="row m-0">
              <div className="col-8 mx-auto p-0">
                <UserTable
                  result={this.state.result}
                  returnFunction={this.changeProfileState}
                />
              </div>
              <div className="col-3 mx-auto p-0">
                <UserInfo profile={this.state.profile} />
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <UserInput returnFunction={this.changeFetchState} />
          </div>
        );
      }
    } else if (this.state.view === "repository") {
      return (
        <div>
          <UserInput returnFunction={this.changeFetchState} />
          <div>Looking for repo</div>
        </div>
      );
    }
  }
}

export default App;
