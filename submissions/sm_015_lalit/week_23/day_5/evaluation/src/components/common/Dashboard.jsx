import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            usrData:{}
        }
    }
    componentDidMount(){
        if(this.props.islogged){
            let token=this.props.token
            let username=this.props.username
            axios.defaults.headers.common['Authorization'] = "Bearer " + token;
            axios({
                method:"GET",
                url:"http://localhost:8080/user/"+username
            })
            .then(res=>{
                console.log("profile",res.data)
                this.setState({
                    usrData:{...this.state.usrData,...res.data}
                })
            })
            .catch(err=>{
                console.log("p error",err.message)
            })
        }
    }
    render(){
        if(this.state.usrData.length !==0){
            return(
                <>
                <div className="text-center mt-5">
                    <p className="display-3">{this.props.username}</p>
                    <div className="col-4 d-flex mx-auto justify-content-between">
                    <p className="h5"> Name : </p>
                    <p>{this.state.usrData.name}</p>
                    </div>
                    <div className="col-4 d-flex mx-auto justify-content-between">
                    <p className="h5"> Email : </p>
                    <p>{this.state.usrData.email}</p>
                    </div>
                    <div className="col-4 d-flex mx-auto justify-content-between">
                    <p className="h5"> Mobile : </p>
                    <p>{this.state.usrData.mobile}</p>
                    </div>
                    <div className="col-4 d-flex mx-auto justify-content-between">
                    <p className="h5"> Description : </p>
                    <p>{this.state.usrData.description}</p>
                    </div>
                    <p>{this.props.token}</p>
                    </div>
                
                </>
            )
        }
        else{
            return(
                <div className="display-3 text-center">
                    An error occured
                </div>
            )
        }
    }
}
const mapStateToProps=(state)=>{
    return{
        islogged:state.islogged,
        token:state.token,
        username:state.username
    }
}
export default connect(mapStateToProps,null)(Dashboard)