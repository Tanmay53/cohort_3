import React, { Component } from 'react'
import axios from "axios"

export default class dummy extends Component {
    async componentDidMount(){
        console.log("sdgsdghi")
       await axios.get(`http://localhost:5000/listing?count=${this.state.count}&offset= ${this.state.page * this.state.count}`)
        .then  ((res)=>
        this.setState({
            data:res.data.data_list,
            Num_pages:res.data.total_pages
        })
     )
    }
    render() {
        return (
            <div>
                hiasfas
            </div>
        )
    }
}
