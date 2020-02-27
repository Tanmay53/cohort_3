import React, { Component } from 'react'
import axios from 'axios'

export default class Editcomment extends Component {
    constructor(props){
        super(props)
        this.state={
            commenttext:""
        }
    }

    componentDidMount(){
        let token = localStorage.getItem('token')
        axios({
            method:"GET",
            url:`http://localhost:5000/singlecomment/${this.props.match.params.id}`,
            headers:{'Authorization':`Bearer ${token}`}
        })
        .then((res)=>{
            console.log(res)
            this.setState({
                commenttext:res.data[0].content
            })
        })
    }
    handleChange=(e)=>{
        this.setState({
            commenttext:e.target.value
        })
    }
    handleClick=()=>{
        let token = localStorage.getItem('token')
        axios({
            method:"POST",
            url:`http://localhost:5000/singlecomment/${this.props.match.params.id}`,
            data:{
                content:this.state.commenttext
            },
            headers:{'Authorization':`Bearer ${token}`}
        })
        .then((res)=>{
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                <input value={this.state.commenttext} onChange={this.handleChange}></input>
                <button onClick ={this.handleClick}>Update</button>
            </div>
        )
    }
}
