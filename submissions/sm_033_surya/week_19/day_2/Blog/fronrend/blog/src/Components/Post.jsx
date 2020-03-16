import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

class Post extends Component {
    constructor(props){
        super(props)
        this.state={
            data:{},
            comments:[],
            commenttext:"",
            isAuth:true,
            sameuser:false,
            userid:""
        }
    }
    componentDidMount(){
        let token = localStorage.getItem("token")
        axios({
            method:"GET",
            url:`http://localhost:5000/singlepost/${this.props.match.params.id}`,
            headers:{'Authorization':`Bearer ${token}`}
        })
        .then ((res)=>{
            console.log(res)
            this.setState({
                data:res.data.data[0],
                userid:res.data.userid
            })
            if (res.data.data[0]["user_id"] == res.data.userid){
                this.setState({
                    sameuser:true
                })
            }
        })
        

        axios({
            method:"GET",
            url:`http://localhost:5000/comments/${this.props.match.params.id}`,
            headers:{'Authorization':`Bearer ${token}`}
        })
        .then ((res)=>{
            this.setState({
                comments:res.data
            })
        })

    
    }
    handleChange=(e)=>{
        this.setState({
            commenttext:e.target.value
        })
    }
    commentit=()=>{
        let token = localStorage.getItem('token')

        axios({
            method:"POST",
            url:`http://localhost:5000/addcomment/${this.props.match.params.id}`,
            data:{
                category_id:this.state.data.category_id,
                content:this.state.commenttext,
            },
            headers:{'Authorization':`Bearer ${token}`}
        })
        axios({
            method:"GET",
            url:`http://localhost:5000/comments/${this.props.match.params.id}`,
            headers:{'Authorization':`Bearer ${token}`}
        })
        .then ((res)=>{
            this.setState({
                comments:res.data
            })
        })
        this.setState({
            commenttext:""
        })
    }
    render() {
        console.log(this.state)
        if(this.state.isAuth){
        return (
            <div className="container text-center">
        <div className="col-12"> <h1>{this.state.data.title}</h1></div>
        <div className="col-12"><h4>{this.state.data.content}</h4></div>
        <div className="col-12 m-3 text-left">
            <div>Comments:</div>
        <div className="row border">
        {this.state.comments.map((ele)=><div className="col-12"><p>{ele.content}</p>
        <div>
            {(this.state.userid ==  ele.user_id) && <div><Link to={`/editcomment/${ele.id}`}><button>Edit</button></Link><button>Delete</button></div>}
        </div>
        </div>)}
        <div className="col-6"><input className="form-control col-12" placeholder="please enter comment" type="text" value={this.state.commenttext} onChange={this.handleChange} /></div>
        <div className="col-6"> <button className="btn btn-success" onClick={this.commentit}>add</button></div>
        </div>
        </div>
        {this.state.sameuser && <div>
        <Link to= {`/editpost/${this.props.match.params.id}`}  ><button>EDIT</button></Link>
        <button>Delete</button>
            </div>}
        </div>
        )
        }
        else {
            return(
                <Redirect to="/login"/>
            )
        }
    }
}
export default Post