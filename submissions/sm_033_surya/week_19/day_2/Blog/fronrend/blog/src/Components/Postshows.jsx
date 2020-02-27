import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

class Postshows extends Component {
    constructor(props){
        super(props)
        this.state={
            data : [],
            isAuth:true
        }
    }
    componentDidMount(){
            let token = localStorage.getItem("token")
            if (token == null || token == "error"){

                    this.setState({
                        isAuth:false
                    })
            }
        axios({
            method:"GET",
            url:'http://localhost:5000/listing',
            headers:{'Authorization':`Bearer ${token}`}
        })
        .then ((res)=>{
            this.setState({
                data:res.data
            })
        })
    }
    render() {
        console.log(this.state.data)
        if(this.state.isAuth){
        return (
            <div className="container">
                <div className="row">
                {this.state.data.map((ele)=><div className="col-4">
                <div className="col-12"> <h1>{ele.title}</h1></div>
                <div className="col-12 text-right"><p>{ele.date}</p></div>
                <div className="col-12"><p>{ele.content}</p></div>
                <div><Link to={`/post/${ele.id}`}><button className="btn btn-primary">Readmore</button></Link></div>
                </div>)}
                </div>
            </div>
        )
                }
        else {
            return(
                <Redirect to ="/login"/>
            )
        }
    }
}
export default Postshows