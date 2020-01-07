// import axios from 'axios'
import Search from './Components/Search'
import Display from './Components/Display'
import UserProfile from './Components/UserProfile'

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      value:'',
      data:'',
      isTableShow:true,
      showUserProfile:false,
      specificUserData:''
    }
  }

  handleClick = (cate,input,lang) =>{
    this.setState({
      value:[cate,input,lang],
      isTableShow:true
    })
    console.log(cate,input,lang)
  }

  handleInputChange = () =>{
    this.setState({
      isTableShow:false
    })
  }

  handleUserData = (user) =>{
    this.setState({
      showUserProfile:!this.state.showUserProfile,
      specificUserData:user
    })
  }
  
  render() {
    const user = this.state.specificUserData;
    if(this.state.showUserProfile){
     return( <div className='container'>
          <UserProfile data={user}/>
          <button className='btn btn-outline-primary' onClick={()=>this.setState({showUserProfile:!this.state.showUserProfile})}>search another user</button>
      </div>)
    }else{
      return (
        <div>
            <Search onBtnClick={this.handleClick} onInputChange={this.handleInputChange} />
            {this.state.isTableShow && <Display value={this.state.value} returnProfile={this.handleUserData}/>}
        </div>
      )
    }
  }
}
