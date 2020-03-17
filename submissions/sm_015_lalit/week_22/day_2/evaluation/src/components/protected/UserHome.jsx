import React from "react";
import styles from './UserHome.module.css'
import { Link, Redirect } from 'react-router-dom'
import Tweet from '../common/Tweet'
import { connect } from 'react-redux'
import { makeTweet,followHim,logoutsuccess } from '../../redux/authentication/actions'

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        tweet:"",
        currentlyFollowed:""
    };
  }
  handleChange=(e)=>{
      this.setState({
          tweet:e.target.value
      })
  }
  handleTweet=()=>{
    if(this.state.tweet.length > 0){
        this.props.makeTweet(this.state.tweet)
    }
  }
  handleFollow=(e)=>{
      if(e.target.innerHTML=="Follow"){
        let idx=Number(e.target.getAttribute("idx"))
        let choice =this.props.generatedData[idx].username
        this.setState({
            currentlyFollowed:idx
        })
        this.props.followHim(choice)
        e.target.innerHTML="Following"

      }

  }
  handleLogout=()=>{
    this.props.logout()
  }
  render(){
     return (
      <>
        <div className="d-flex justify-content-around mx-5">
          <div className="col-3">
              
            <div className="d-flex flex-column justify-items-center mt-3 font-weight-bold">
            <p className="text-left">
              <svg
                height="41px"
                viewBox="0 0 24 24"
                fill="#3A83F7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </svg>
            </p>
                <p className={`my-4 ${styles.menu}`}><i class="fas fa-home mr-3"></i>Home</p>
                <p className={`my-4 ${styles.menu}`}><i class="fas fa-hashtag mr-3"></i>Explore</p>
                <p className={`my-4 ${styles.menu}`}><i class="far fa-bell mr-3"></i>Notifications</p>
                <p className={`my-4 ${styles.menu}`}><i class="far fa-envelope mr-3"></i>Messages</p>
                <p className={`my-4 ${styles.menu}`}><i class="far fa-bookmark mr-3"></i>Bookmarks</p>
                <p className={`my-4 ${styles.menu}`}><i class="far fa-bookmark mr-3"></i>Lists</p>
                <Link to="/profile"><p className={`my-4 ${styles.menu}`}><img style={{height:"30px",width:"30px"}}  className="rounded-circle mr-3" src="data:image/jpeg;base64,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" alt=""/>
Profile</p></Link>
            </div>

          </div>
          <div className="col-6">
            
            <div className="d-flex mt-2 justify-content-between mx-2">
              <p className="h4">User Home</p>
              <p>
                <svg
                  height="22px"
                  viewBox="0 0 24 24"
                  fill="#1DA1F2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
                </svg>
              </p>
            </div>
            <hr/>
            <div className="d-flex justify-content-start">
                <img style={{height:"70px",width:"70px"}}  className="rounded-circle" src="data:image/jpeg;base64,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" alt=""/>
                <input onChange={this.handleChange} placeholder="What's happening?" className="col ml-2 border border-white" type="text"/>
            </div>
            <div className="d-flex justify-content-between my-2">
                <p className="ml-5 pl-4">
                <i className={`mx-2 far fa-smile text-primary ${styles.fIcon}`}></i>
               
                <i className= {`mx-2 fas fa-at text-primary ${styles.fIcon}`}></i>
                </p>
                <button onClick={this.handleTweet} type="button" className={`${styles.rounded} btn btn-primary col-2`}>Tweet</button>
            </div>
            <hr/>
            <div>
                <p>Follow some users</p>
            </div>
            <div>
                <div className="d-flex justify-content-between my-3 mx-3">
                   <div >
                   <img className="rounded-circle" style={{height:"75px",width:"75px"}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE-Ffzo49Drm4fJBd5w3Kz5CB_XbCirt69X6jWXxRhLvZHNvSc" alt=""/>
                   <span className="ml-5 h5">Manish Sharma</span>
                   </div>
                    <button idx="0" onClick={this.handleFollow} type="button" class={`${styles.rounded} btn btn-primary my-3`}>Follow</button>
                </div>
                <div className="d-flex justify-content-between my-3 mx-3">
                    <div>
                    <img className="rounded-circle" style={{height:"75px",width:"75px"}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgq4PthLT913LZ67uHsH8jMgxb48U7_sL9mo7-h811QmLKXXrI" alt=""/>
                    <span className="ml-5 h5">Dipanshu Sabharwal</span>
                    </div>
                    <button idx="1" onClick={this.handleFollow} type="button" class={`${styles.rounded} btn btn-primary my-3`}>Follow</button>
                </div>
                <div className="d-flex justify-content-between my-3 mx-3">
                   <div>
                   <img className="rounded-circle" style={{height:"75px",width:"75px"}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQk45aCcKIXm2SWuK4nYpW7G9fCnGy930Llt5RWZtWAJiaO5F9D" alt=""/>
                   <span className="ml-5 h5">Aalind Sharma</span>
                   </div>
                    <button idx="2" onClick={this.handleFollow} type="button" class={`${styles.rounded} btn btn-primary my-3`}>Follow</button>
                </div>
                <div className="d-flex justify-content-between my-3 mx-3">
                    <div>
                    <img className="rounded-circle" style={{height:"75px",width:"75px"}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXs02-3WhmCy9AfC7Y2Cumen9JYHQfu2cewgMfH6D6dh27wFAO" alt=""/>
                    <span className="ml-5 h5">Gaurav Arya</span>
                    </div>
                    <button idx="3" onClick={this.handleFollow} type="button" class={`${styles.rounded} btn btn-primary my-3`}>Follow</button>
                    
                </div>
            <hr/>
            {this.props.tweets!=undefined ? this.props.tweets.map(e=><Tweet username={this.props.username} url="data:image/jpeg;base64,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" tweet={e} />) : <></>}
            {this.props.generatedData[this.state.currentlyFollowed]? this.props.generatedData[this.state.currentlyFollowed].tweets.map(e=><Tweet url={this.props.generatedData[this.state.currentlyFollowed].photo} username={this.props.generatedData[this.state.currentlyFollowed].username} tweet={e} />):<></> }
            </div>
          </div>
          <div className="col-3">
              <p className="text-center mt-2">
              <button onClick={this.handleLogout} type="button" class="btn btn-primary">Logout</button>
              </p>
          </div>
        </div>
        {this.props.isAuth==false && <Redirect to="/"/>}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
    isAuth:state.isAuth,
    username:state.username,
    tweets:state.tweets,
    following:state.following,
    generatedData:state.generatedData
})

const mapDispatchToProps =(dispatch)=> ({
    makeTweet:(value)=>dispatch(makeTweet(value)),
    followHim:(value)=>dispatch(followHim(value)),
    logout:()=>dispatch(logoutsuccess())
})


export default connect(mapStateToProps,mapDispatchToProps)(UserHome);
