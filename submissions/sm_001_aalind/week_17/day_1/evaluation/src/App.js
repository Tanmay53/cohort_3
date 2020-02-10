import React, { Component } from 'react';
import Routes from './routes/Routes';
import Navbar from './components/common/Navbar';
import all_rooms from "./components/common/meeting_rooms.json"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged_user: {
        token: ''
      },
      all_rooms: all_rooms
    };
  }

  loginUser = token => {
    localStorage.setItem('logged_user', JSON.stringify({ token: token }));
    this.setState({
      logged_user: {
        token: token
      }
    });
  };

  logoutUser = () => {
    localStorage.setItem('logged_user', JSON.stringify({ token: '' }));
    this.setState({
      logged_user: {
        token: ''
      }
    });
  };

  isLoggedIn = () => (this.state.logged_user.token ? true : false);

  getUser = () => this.state.logged_user.token;

  componentDidMount = () => {
    let token = JSON.parse(localStorage.getItem('logged_user')) || '';
    this.setState({
      logged_user: token
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          isLoggedIn={this.isLoggedIn}
          getUser={this.getUser}
          logoutUser={this.logoutUser}
        />
        <Routes
          loginUser={this.loginUser}
          logoutUser={this.logoutUser}
          getUser={this.getUser}
          isLoggedIn={this.isLoggedIn}
          all_rooms={this.state.all_rooms}
        />
      </React.Fragment>
    );
  }
}

export default App;
