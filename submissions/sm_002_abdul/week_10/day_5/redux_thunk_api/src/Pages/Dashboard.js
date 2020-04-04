import React from "react"
import axios from "axios"
import {connect} from "react-redux"

class Dashboard extends React.Component{
  constructor (props){
    super (props)
    this.state = {
      profile : {}
    }
  }



  componentDidMount(){
    const {isLogged,token,username} = this.props

    if(isLogged){
      axios.get(`http://localhost:8080/user/${username}`,{
        headers : {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(resp=>{
        console.log(resp.data)
        let newProfile = resp.data
        this.setState(prevState=>{
          return {
            profile : {...prevState.profile,...newProfile}
          }
        })
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }


  render(){

    const {name,email,username,mobile,description}=this.state.profile

    return (
      <div className="container">
        <div className="col-4 offset-4">
          <div className="card" style={{width: "18rem"}}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Name : {name}</li>
              <li className="list-group-item">Email : {email}</li>
              <li className="list-group-item">Username : {username}</li>
              <li className="list-group-item">Mobile : {mobile}</li>
              <li className="list-group-item">Description : {description}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    isLogged : state.isLogged,
    token : state.token,
    username : state.username
  }
}

export default connect(mapStateToProps,null)(Dashboard)