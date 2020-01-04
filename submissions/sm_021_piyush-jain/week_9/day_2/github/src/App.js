import React from 'react';
import axios from 'axios'
import NAME from './components/NAME'
import REPOS from './components/REPOS'
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      api: [],
      name: false,
      repos:false,
      selected:"",
      user:"",
      repository:"",
      boolean:false
    }
  }
  select=(e)=>{
    this.setState({selected:e.target.value})
    if(e.target.value=="NAME")
    {
      this.setState({name:true,repos:false})
    }
    else{
      this.setState({repos:true,name:false})
    }
  }
  setNull=()=>{
    this.setState({user:''})
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleClick=()=>{
    this.setState({boolean:true})
  }
  render() {
    return (
      <div>
        <h1 class="text-center">GITHUB</h1>
        <select onChange={this.select}>
          <option>Search by..</option>
          <option value="NAME">NAME</option>
          <option value="REPOS">REPOS</option>
        </select>
        <button onClick={this.handleClick}>Submit</button> 
          {this.state.name &&<input type="text" name="user" onClick={this.setNull} placeholder="Enter the USER" onChange={this.handleChange}/>}
          {this.state.boolean &&this.state.name&&<NAME user={this.state.user}/>}
          {this.state.repos &&<input type="text" name="repository" placeholder="Enter the REPOSITORY" onChange={this.handleChange}/>}
          {this.state.repos &&this.state.boolean &&<REPOS repos={this.state.repository}/>}      
      </div>
    )
  }
}

export default App;
