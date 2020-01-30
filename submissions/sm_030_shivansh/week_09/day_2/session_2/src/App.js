import React from 'react';
import User from "./component/User";
import Table from "./component/Table";
import axios from 'axios';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }




  //handleUsername function
  handleUsername = (name) => {

    console.log(this.state.username)
    //requesting the api call  to  fing the github user
    axios.get(`https://api.github.com/search/users?q=${name}`)
      .then((res) => {
        console.log(res)
        this.setState({
          data: res.data.items
        })
      })
      .catch(error => console.log(error))


  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <User add={this.handleUsername} />
        {this.state.data.length !== 0 && <Table data={this.state.data} />}
      </div>
    );
  }
}

export default App;
