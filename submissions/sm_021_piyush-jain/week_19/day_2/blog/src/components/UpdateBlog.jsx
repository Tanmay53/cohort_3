import React, { Component } from 'react'
import axios from "axios"
import { connect } from 'react-redux'
class UpdateBlog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            user_id: 0,
            category_id: 0,
            title: "",
            message: "",
            blog: [],
        }
    }
    componentDidMount = async () => {
        var token = this.props.token
        this.setState({
            id: this.props.match.params.blog_id,
            user_id: this.props.match.params.user_id,
            category_id: this.props.match.params.category_id,
        })
        await axios({
            method: 'get',
            url: `http://127.0.0.1:5000/toBeUpdated/${this.props.match.params.blog_id}/${this.props.match.params.user_id}/${this.props.match.params.category_id}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                blog: res.data.items[0]
            }))
        this.setState({
            title: this.state.blog.title,
            message: this.state.blog.blog
        })
    }
    handleChange = (e) => {
        console.log("called")
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleUpdate = async () => {
        var token = this.props.token
        console.log(this.state)
        await axios({
            method: 'POST',
            url: `http://127.0.0.1:5000/updatedBlog/${this.props.match.params.blog_id}/${this.props.match.params.user_id}/${this.props.match.params.category_id}`,
            headers: { 'Authorization': `Bearer ${token}` },
            data: {
                "title": this.state.title,
                "blog": this.state.message
            }
        })
            .then(this.props.history.goBack)

    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div class="d-flex justify-content-center mt-5">
                    <div style={{ "width": "50%" }} class="shadow p-3 mb-5 bg-white rounded ">
                        <h3>Title</h3>
                        <textarea value={this.state.title} name="title" onChange={this.handleChange} /><br></br>
                        <h3>Blog</h3>
                        <div><textarea type="text" value={this.state.message} name="message" onChange={this.handleChange} /></div><br></br>
                        <div class="d-flex justify-content-center mt-3"><button class="btn btn-warning" onClick={this.handleUpdate}>Update</button></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    status: state.login,
    token: state.token
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBlog)