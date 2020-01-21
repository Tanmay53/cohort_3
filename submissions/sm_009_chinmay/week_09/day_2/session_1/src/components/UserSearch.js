import React, { Component } from 'react'
import axios from 'axios'
import DisplayTable from './DisplayTable'

class UserSearch extends Component {
    constructor(){
        super()
        this.state = {
          username:'',
          isUsernameCollected: false,
          userSearchResult: [],
          showUserSearchResultTable: false,
          moreUserInfoNeeded: [],
          showMoreUserInfo: false,
        }
      }
    
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    
      handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
          username: this.state.username,
          isUsernameCollected: true
        })
        // console.log('after submit', this.state)
        const requestParams = {
            method: 'get',
            url: 'https://api.github.com/search/users?',
            params: {
              q: this.state.username
            }
          }
        axios(requestParams)
          .then(response => {
            console.log(response)
            let reponsesLength = response.length

            if(reponsesLength===0) {
                alert('No repos!!')
            }
            else {
                this.setState({
                    userSearchResult: response.data, 
                    showUserSearchResultTable: true,
                    showMoreUserInfo: false
                })
            }
          })
          this.reset()
      }

      handleMoreInfoClick = (input) => {
          console.log('more info clicked ', input)
          this.setState({
            moreUserInfoNeeded: input,
            showMoreUserInfo: true
          })
          console.log(this.state.moreUserInfoNeeded)
      }

      reset= ()=> {
        this.setState({
          username: ''
        })
      }
      
      render(){
          return (
              <div>
                  <form>
                    <h4>Search User on Github</h4> <br/>
                    <div className="from-group">
                      <input className='form-control mb-3 col-4 mx-auto' name='username' value={this.state.username} onChange={this.handleChange} placeholder='Enter Username'/>
                      <button onClick={this.handleSubmit} className='btn btn-success mb-3'>Search</button>
                      <button onClick={this.reset} className='btn btn-secondary mx-2 mb-3'>Reset</button>
                    </div>

                    {this.state.showUserSearchResultTable && 
                      <DisplayTable data={this.state.userSearchResult} handleMoreInfoClick={this.handleMoreInfoClick} info={this.state}/>
                    }

                  </form>
              </div>
            )
      }
}

export default UserSearch;