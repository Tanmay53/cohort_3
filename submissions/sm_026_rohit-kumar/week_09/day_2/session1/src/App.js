import React from 'react';
import SearchControl from './components/search/searchControl'
import DisplayTable from './components/display/displayTable'
import UserProfile from './components/display/userProfile'

class App extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      view : 'search',
      userSearchResults : [],   // holds the results retrived from github api fetch
      userProfile : null
    }
  }


  updateUserProfileData = (profileData) => {
    this.setState({
      userProfile : profileData,
      view : 'profile'
    })

    // console.log('user profile data : ', this.state.userProfile)
  }

  updateSearchResults = (userResults) => {
      this.setState({
        userSearchResults : userResults
      })

      console.log('app-js:- userSearchResutls : ', userResults)
  }

  render() {
      if(this.state.view == 'search') {
        return (
          <div className='container mt-5'>
              <SearchControl callbackUpdateSearchResults = {this.updateSearchResults} />
              <DisplayTable userSearchResults = {this.state.userSearchResults}
                            callbackUpdateUserProfileData = {this.updateUserProfileData}  />
              
          </div>
        )
      }
      else if(this.state.view == 'profile') {
        return (
          <div className='container mt-5'>
              <UserProfile profile = {this.state.userProfile} />              
          </div>
        )
      }
  }
}

export default App;
