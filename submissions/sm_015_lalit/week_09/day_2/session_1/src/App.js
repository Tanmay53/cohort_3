import React from 'react';
import './App.css';
import uuid1 from 'uuid/v4';
import axios from 'axios';
import Input from './components/Input'
import Moreinfo from './components/Moreinfo'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      reposData: [],
      searchBy: "",
      language: "",
      query: "",
      onlyme: false,
      info: ""
    }
  }
  handleChange = ((e) =>
    this.setState({
      query: e.target.value
    }))

  handleSelect = ((e) => {
    this.setState({
      searchBy: e.target.value
    })
  })

  handleSubmit = () => {
    let conQuery = this.state.query.split(" ").join("+")
    if (this.state.searchBy === "Repos") {
      console.log('https://api.github.com/search/repositories?q=' + conQuery + '+language:' + this.state.language + '&sort=stars&order=desc')
      axios.get('https://api.github.com/search/repositories?q=' + conQuery + '+language:' + this.state.language + '&sort=stars&order=desc')
        .then(response => {
          console.log(response)
          this.setState({
            reposData: response.data.items
          })
        })
        .catch(error => console.log(error));


    }

    else {
      console.log('https://api.github.com/search/users?q=' + conQuery)
      axios.get('https://api.github.com/search/users?q=' + conQuery)
        .then(response => {
          // console.log(response)
          this.setState({
            data: response.data.items
          })
          // this.state.data.push(response.data)
          // console.log(this.state.data.items)
          // console.log(this.state.data.length)
        })
        .catch(error => console.log(error));
      // setTimeout(() => {
      //   this.setState({
      //     submit:true,
      //   })
      // }, 0)
    }
  }

  handleClick = (e) => {
    console.log(e.target.parentElement.previousSibling.textContent)
    let clue = e.target.parentElement.previousSibling.textContent
    let found = this.state.data.filter(e => e.id == clue)
    console.log(found)
    this.setState({
      info: found,
      onlyme: true
    })
  }
  handleback = () => {
    this.setState({
      info: "",
      onlyme: false
    })
  }
  handlelanguage = (e) => {
    this.setState({
      language: e.target.value
    })
  }

  render() {
    if (this.state.onlyme) {
      return (
        <div>
          <Moreinfo avatar={this.state.info[0].avatar_url} id={this.state.info[0].id} name={this.state.info[0].login} node={this.state.info[0].node_id} back={this.handleback} url={this.state.info[0].html_url} />
        </div>
      )
    }
    else {
      return (
        <div>
          <Input change={this.handleChange} valueUp={this.state.query} selectChange={this.handleSelect} />
          <div className="text-center">
            {(this.state.searchBy === "Repos") &&
              <div>
                <select onChange={this.handlelanguage} class="custom-select col-2 m-2 border-0 bg-success text-white rounded-0" name="" id="">
                  <option>Assembly</option>
                  <option>C</option>
                  <option>Java</option>
                  <option selected>Javascript</option>
                  <option>Python</option>
                  <option>Ruby</option>
                </select>    <br />
              </div>
            }
            <button onClick={this.handleSubmit} type="button" className="btn btn-primary mt-2 mx-auto">Search</button>
          </div>

          <table className="table mt-4 container table-hover">
            <thead className="thead-dark">
              {(this.state.reposData.length > 0) && <tr>
                <th>
                  Id
          </th>
                <th>
                  Name
          </th>
                <th>
                  Full Name
          </th>
                <th>
                  Description
          </th>
                <th>
                  Url
          </th>
              </tr>}
            </thead>
            <tbody>
              {(this.state.reposData.length > 0) && this.state.reposData.map((e) => { return <tr key={uuid1()}><td>{e.id}</td><td>{e.name}</td><td>{e.full_name}</td><td>{e.description}</td><td><a href={e.html_url} target="_blank" rel="noopener noreferrer" >Direct link</a></td></tr> })}

            </tbody>
          </table>

          <table className="table mt-4 container ">
            <thead className="thead-dark">
              {(this.state.data.length > 0) && <tr>
                <th>
                  Avatar
          </th>
                <th>
                  Username
          </th>
                <th>
                  Repos
          </th>
                <th>
                  Score
          </th>
                <th>
                  Id
          </th>
                <th>
                  More info
          </th>
              </tr>}
            </thead>
            <tbody>
              {(this.state.data.length > 0) && this.state.data.map((e) => { return <tr key={uuid1()}><td><img style={{ height: "100px" }} src={e.avatar_url} alt="xyz" /></td><td>{e.login}</td><td><a href={e.repos_url} target="_blank" rel="noopener noreferrer" >Click here for repos</a></td><td>{e.score}</td><td>{e.id}</td><td><button type="button" onClick={this.handleClick} className="btn btn-primary">Click here !</button></td></tr> })}

            </tbody>
          </table>
          <div>
            {/* {(this.state.data.length>0) ? <p>{JSON.stringify(this.state.data)}</p> : <p>submit is false</p>} */}
          </div>
        </div>
      )
    }
  }
}
