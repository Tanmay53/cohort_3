import React, { Component } from 'react'
import GithubUser from './Components/GithubUser'
import axios from 'axios'
import GithubTable from './GithubTable'
import GithubRepo from './Components/GithubRepo'
import GithubRepoTable from './GithubRepoTable'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userName: "",
       flag: false,
       userArr: [],
       userRepo:"",
       repoArr: [],
       arr1:[]
    }
  }

  changeUser = (e) => {
    this.setState({
      userName: e.target.value
    });
  }

  changeRepo = (e) => {
    this.setState({
      userRepo: e.target.value
    });
  }

  searchUser = () => {
    axios
        .get("https://api.github.com/search/users?q="+this.state.userName)
        .then(response => {
          console.log(response.data)
          const data = response.data.items
          this.setState({
            userArr:data,
            userName:'',
            flag:true
          });
        })
        .catch(error => console.log(error));     
  }

  searchRepo = () => {
    axios
        .get("https://api.github.com/search/repositories?q="+this.state.userRepo)
        .then(response => {
          console.log(response.data.items)
          const data = response.data.items
          this.setState({
            repoArr:data,
            userRepo:''
          });
        })
        .catch(error => console.log(error));     
  }
  
  render() {
    return (
      <div>
        {
          this.state.flag ?
          (
            <div>
              <GithubTable arr={this.state.userArr}/>
            </div>
          ) :
          (
            <div>
              <GithubUser change={(e) => this.changeUser(e)} value={this.state.userName} search={this.searchUser} />
              <GithubRepo change={(e) => this.changeRepo(e)} value={this.state.userRepo} search={this.searchRepo} />
              <GithubRepoTable arr={this.state.repoArr}/>
            </div>      
          )
        }
      </div>
    )
  }
}

export default App

// import React from 'react'

// function App() {
//   const myCss = {
//     color: "blue",
//     fontWeight: "800",
//     background: "pink",
//     fontSize: "50px",
//     textAlign: "center"
//   }
//   return (
//     <div>
//       <h1 style={myCss}>hey! you can use variables in css.</h1>
//     </div>
//   )
// }

// export default App
