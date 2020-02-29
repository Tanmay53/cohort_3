import React, { Component } from 'react'
import axios from "axios"
class Allcomments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            user: 0
        }
        console.log(props)
    }
    componentDidMount = async() => {
        var token = localStorage.getItem("token")
        console.log(token)

        await axios.post(`http://127.0.0.1:5000/getId`, { "token": token })
        .then(res => this.setState({
            user: Number(res.data)
        }))

        await axios({
            method: 'get',
            url: `http://127.0.0.1:5000/Allcomments/${this.props.match.params.id}/${this.props.match.params.user_id}/${this.props.match.params.category_id}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => console.log(res))
        // .then(res => this.setState({
        //     user: res.data.items[0]
        // }))        
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
export default Allcomments