import React from 'react'
import axios from "axios"
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'

class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            user_id: 0,
            category_id: 0,
            blogs: [],
            comment: "",
        }
        console.log(props)
    }
    componentDidMount = async () => {
        var token = this.props.token
        this.setState({
            id: this.props.match.params.id,
            user_id: this.props.match.params.user_id,
            category_id: this.props.match.params.category_id,
        })
        await axios({
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
    handleClick = async (id, user_id, category_id) => {
        this.setState({
            comment: ""
        })
        var token = this.props.token
        await axios({
            method: 'post',
            url: `http://127.0.0.1:5000/addComments/${id}/${user_id}/${category_id}`,
            headers: { 'Authorization': `Bearer ${token}` },
            data: {
                "comment": this.state.comment
            }
        })
            .then(this.props.history.goBack)
    }
    render() {
        console.log(this.state)
        if (this.props.token) {
            return (
                <React.Fragment>
                    <div class="d-flex justify-content-center container mt-5  shadow p-3 mb-5 bg-white rounded" style={{ "width": "50%" }}>
                        <div class="row">
                            <div class="card mt-2">
                                <div class="card-header">
                                    {this.state.blogs.title}
                                </div>
                                <div class="card-body">
                                    <blockquote class="blockquote mb-0">
                                        <p class="overflow-auto">{this.state.blogs.blog}</p>
                                        <footer class="blockquote-footer">Posted on<cite title="Source Title">{this.state.blogs.date}</cite></footer>
                                        <textarea rows="3" width="100%" onChange={this.handleChange}></textarea><br></br>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mt-3">
                        <button onClick={() => this.handleClick(this.state.id, this.state.user_id, this.state.category_id)} class="btn btn-warning">ADD COMMENT</button>
                        <button onClick={this.props.history.goBack} class="btn btn-dark text-white ml-3"> Go Back</button>
                    </div>
                </React.Fragment>
            )
        }
        else {
            return (<Redirect to="/home"></Redirect>)
        }
    }
}
const mapStateToProps = (state) => ({
    status: state.login,
    token: state.token
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
