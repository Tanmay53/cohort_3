import React from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  checkLoginStatus = loggedIn => {
    console.log("Login state received as =>", loggedIn);

    if (loggedIn) {
      this.setState({
        isLoggedIn: loggedIn
      });
    }
  };

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <div>
          <Login function={this.checkLoginStatus} />
        </div>
      );
    }

    if (this.state.isLoggedIn) {
      return <Dashboard />;
    }
  }
}

export default App;
