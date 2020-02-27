import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            isAuth:false
        }
    }
    componentDidMount(){
        let token =  localStorage.getItem('token')
            let  tokenvalue =  token["token"]
            console.log(token)
            if (token == "error"|| tokenvalue == null){
                this.setState({
                    isAuth:false
                })
            }
    }

    handleclick=()=>{
        localStorage.clear()
        this.setState({
            isAuth:true
        })
    }
    render() {
        if(this.state.isAuth){
            return(
                <div className="row bg-primary p-4">
                    <div className="col-3"> <Link to ="/"><button className="btn btn-light">Home</button></Link></div>
                    <div className="col-3"><Link to="/login"><button className="btn btn-light">Login</button></Link></div>
                    <div className="col-3"><Link to ="/CreatePost"><button className="btn btn-light">Create Post</button></Link></div>
                <Redirect to ="/logout"/>
                </div>
            )
        }
        return (
            
            <div className="container-fluid">

                <div className="row bg-primary p-4">
                    <div className="col-3"> <Link to ="/"><button className="btn btn-light">Home</button></Link></div>
                    <div className="col-3"><Link to="/login"><button className="btn btn-light">Login</button></Link></div>
                    <div className="col-3"><Link to ="/CreatePost"><button className="btn btn-light">Create Post</button></Link></div>
                    {<div className="col-3"><button className="btn btn-light" onClick={this.handleclick}>Logout</button></div>}
                </div>
            </div>
        )

    }
}
export default Home 