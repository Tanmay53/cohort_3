import React from 'react'
import axios from "axios"
import { Link,Connector } from "react-router-dom"

class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            user_id: 0,
            category_id: 0,
            blogs: [],
            comment: ""
        }
    }
    componentDidMount = () => {
        var token = localStorage.getItem("token")
        this.setState({
            id: this.props.match.params.id,
            user_id: this.props.match.params.user_id,
            category_id: this.props.match.params.category_id,
        })
        axios({
            method: 'get',
            url: `http://127.0.0.1:5000/userComments/${this.props.match.params.id}/${this.props.match.params.user_id}/${this.props.match.params.category_id}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                blogs: res.data.items[0]
            }))
    }
    handleChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }
    handleClick = (id, user_id, category_id) => {
        this.setState({
            comment:""
        })
        axios.post(`http://127.0.0.1:5000/addComments/${id}/${user_id}/${category_id}`,{"comment": this.state.comment})
        .then(res=>console.log(res))
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div class="card">
                    <div class="card-header">
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>{this.state.blogs.blog}</p>
                            <footer class="blockquote-footer">Posted on<cite title="Source Title">{this.state.blogs.date}</cite></footer>
                        </blockquote>
                    </div>
                </div>
                <div>
                    <textarea rows="5" cols="50" onChange={this.handleChange}></textarea>
                    <button onClick={() => this.handleClick(this.state.id, this.state.user_id, this.state.category_id)}>ADD COMMENT</button>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default Comment
