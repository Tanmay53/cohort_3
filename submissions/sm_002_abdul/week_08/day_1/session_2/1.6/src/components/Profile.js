import React from 'react'
import App from '../App'

class Profile extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props)
    this.state={
      userProfileData: this.props.item
    }
  }

  render(){
    return(
      <div className='card col-4 bg-midnightblue'>
        <img src='https://images.pexels.com/photos/247120/pexels-photo-247120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' height='50' width='100' alt='' className='rounded-circle col-4 offset-4'></img>
        <div className='text-center'>
        <h5 className="text-muted">{this.state.userProfileData.name}</h5>
          <small className='font-weight-bold text-muted'>{this.state.userProfileData.location}</small><br></br>
          <div className='row'>
            <small className='text-muted col-6 offset-3'>{this.state.userProfileData.description}</small>
          </div>
          <div className='row'>
            <div className='btn btn-primary col-3 offset-3'>Message</div>
            <div className='btn btn-outline-primary col-3'>Following</div>
          </div>
        </div>
        <div className='card-footer'>
          <small className='font-weight-bold text-muted text-left'>SKILLS</small><br></br>
          <div>
            <button type="button" className="btn btn-outline-info m-1">{this.state.userProfileData.skills[0]}</button>
            <button type="button" className="btn btn-outline-info m-1">{this.state.userProfileData.skills[1]}</button>
            <button type="button" className="btn btn-outline-info m-1">{this.state.userProfileData.skills[2]}</button>
            <button type="button" className="btn btn-outline-info m-1">{this.state.userProfileData.skills[3]}</button>
            <button type="button" className="btn btn-outline-info m-1">{this.state.userProfileData.skills[4]}</button>
            <button type="button" className="btn btn-outline-info m-1">{this.state.userProfileData.skills[5]}</button>
            <button type="button" className="btn btn-outline-info m-1">{this.state.userProfileData.skills[6]}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile