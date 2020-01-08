import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Table from './Components/Table';
import SingleUser from './Components/SingleUser';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: "",
      repository: "",
      userData: [],
      tableStatus: false,
      singleuserdata: [],
      SingletableStatus: false,
      repositoriesData: [],
      repositoriesStatus: false
    }
  }
  handaliing = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  //  -------------Geting userdata------------//
  getData = () => {
    axios.get(`https://api.github.com/search/users?q=${this.state.user}`)
      .then((res) =>
        this.setState({
          userData: res.data.items,
          tableStatus: true
        })
      )
  }
  //-----------------get data of single user--------------//
  singleuser = (id) => {
    axios.get(`https://api.github.com/users/${id}/repos`)
      .then((res) =>
        this.setState({
          singleuserdata: res.data,
          tableStatus: false,
          SingletableStatus: true
        })
      )
  }

  //--------------------search by repository-----------------//
  getrepositoryData = () => {
    axios.get(`https://api.github.com/search/repositories?q=${this.state.repository}`)
      .then((res) =>
        this.setState({
          repositoriesData: res.data.items,
          repositoriesStatus: true
        })
      )
  }
  render() {
    console.log(this.state.repositoriesData)
    return (
      <div className="container text-center">
        <label><h2>Search by User</h2></label>
        <input value={this.state.user} name="user" className="form-control m-2" onChange={this.handaliing}></input>
        <button className="btn btn-primary" onClick={this.getData}>Search</button>
        <hr />
        {this.state.tableStatus && <Table userData={this.state.userData} singleUser={this.singleuser} />}
        {this.state.SingletableStatus && <SingleUser userdata={this.state.singleuserdata} />}
        <label><h2>Search by Repository</h2></label>
        <input value={this.state.repository} name="repository" className="form-control m-2" onChange={this.handaliing}></input>
        <button onClick={this.getrepositoryData} className="btn btn-danger">Search</button>
        {this.state.repositoriesStatus && <SingleUser userdata={this.state.repositoriesData} />}
      </div>
    )
  }
}

export default App;
