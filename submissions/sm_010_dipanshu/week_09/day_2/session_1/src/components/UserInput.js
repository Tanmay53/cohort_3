import React from "react";
import axios from "axios";

class UserInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: "user",
      userName: "",
      resultsFetched: []
    };
  }

  handleInput = event => {
    console.log("Username from inputbox =>", event.target.value);
    console.log("Setting state now");
    this.setState({
      userName: event.target.value
    });

    console.log("Resetting table component to render another search query");
    this.props.returnFunction("user", false, "", -1, null);

    setTimeout(() => {
      console.log("State Changed");
      console.log(
        "userName =>",
        this.state.userName,
        "resultsFetched =>",
        this.state.resultsFetched
      );
    }, 1);
  };

  handleViewChange = event => {
    console.log("View mode changed to", event.target.value);
    let view = event.target.value;
    console.log("Setting the view state in user input");
    this.setState({
      view: view
    });

    setTimeout(() => {
      console.log("State Changed");
      console.log(
        "View =>",
        this.state.view,
        "userName =>",
        this.state.userName,
        "resultsFetched =>",
        this.state.resultsFetched
      );
    }, 1);
  };

  handleSearch = () => {
    if (this.state.view === "repository") {
      
    } else {
      console.log("Search button clicked.Fetching results from api");

      console.log(
        "..................................................................."
      );
      if (this.state.userName !== "") {
        console.log("Making a call to API");
        this.callApi(this.state.userName);
      }
    }
  };

  callApi(user) {
    console.log("Searching github for user", user);
    axios
      .get("https://api.github.com/search/users?q=" + user)
      .then(res => {
        console.log("Pushing fetched data into state");
        console.table(res.data.items);
        let resultsFromAPI = res.data.items;

        console.log("resultsFromAPI", resultsFromAPI);

        console.log("Changing state again");
        this.setState({
          resultsFetched: resultsFromAPI
        });

        console.log("============================================");

        setTimeout(() => {
          console.log("State Changed");
          console.log(
            "userName =>",
            this.state.userName,
            "resultsFetched =>",
            this.state.resultsFetched
          );
        }, 1);

        setTimeout(() => {
          console.log("Lifting state up to parent");
          this.props.returnFunction(
            this.state.view,
            true,
            this.state.resultsFetched,
            -1,
            null
          );
        }, 1);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="input-group shadow shadows-lg col-8 p-0 mx-auto">
          <input
            type="text"
            className="form-control rounded-0 text-center"
            placeholder="Enter username"
            value={this.state.userName}
            onChange={this.handleInput}
          ></input>
          <select
            className="bg-info form-control"
            onChange={this.handleViewChange}
          >
            <option value="user">User</option>
            <option value="repository">Repo</option>
          </select>
          <button
            className="btn btn-info rounded-0 text-dark font-weight-bold"
            onClick={this.handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default UserInput;
