import React, { Component } from 'react'
import { connect } from 'react-redux'
import {followUser} from "../redux/followerAction"

 class UserCard extends Component {

    followThisUser = (e) =>{
        if(this.props.token){
            const url="http://127.0.0.1:5000/auth/follow"
            const token = this.props.token
            const payload = {"user_id":e.target.value}
            this.props.followUser(url,payload,token)
            console.log(payload,token)
        }
    }

    render() {
        
        return (
            <div className="card">
                <img className="card-img-top" style={{width:"100p%",height:"200px"}} src={this.props.data.imgurl} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title text-center">{this.props.data.name}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <button onClick={(e)=>this.followThisUser(e)} value={this.props.data.id} className="btn btn-primary justify-content-center">Follow</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  token:state.commonReducer.token,
})

const mapDispatchToProps = dispatch => ({
    followUser:(url,payload,token)=>dispatch(followUser(url,payload,token))
    
})

export default connect(mapStateToProps,mapDispatchToProps)(UserCard);