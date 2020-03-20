import React from 'react'
import axios from "axios"
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
class Create extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            user_id: 0,
            cat_id: 0,
            title: "",
            blog: "",
            date: 0
        }
    }
    componentDidMount = async () => {
        var token = this.props.token
        await axios.get(`http://127.0.0.1:5000/allCategories`)
            .then(res => this.setState({
                categories: res.data
            }))
        await axios.post(`http://127.0.0.1:5000/getId`, { "token": token })
            .then(res => this.setState({
                user_id: Number(res.data)
            }))
    }
    handleChoose = (e) => {
        this.setState({
            cat_id: Number(e.target.value)
        })
    }
    handleClick = async () => {
        console.log(this.state)
        var token = this.props.token
        var date = ""
        var temp = 0
        temp = new Date()
        console.log(temp)
        date += temp.getFullYear() + "-";
        date += (temp.getMonth() + 1) + "-";
        date += temp.getDate()
        console.log(date)
        await axios({
            method: 'post',
            url: `http://127.0.0.1:5000/makeBlog/${this.state.user_id}/${this.state.cat_id}`,
            headers: { 'Authorization': `Bearer ${token}` },
            data: {
                "title": this.state.title,
                "blog": this.state.blog,
                "date": date
            }
        })
            .then(alert("Thanks for writing a blog"))
            .then(this.props.history.goBack)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        console.log(this.state)
        if (this.props.token) {
            return (
                <React.Fragment>
                    <div class="d-flex justify-content-center">
                        <div style={{ "marginTop": "5%", "width": "50%" }} class="p-3  shadow-lg p-3 mb-5 bg-white rounded">
                            <h2 style={{ "color": "Tomato", "text-decoration-line": "underline", "text-decoration-style": "double" }} class="text-center mb-3">Pen a Blog</h2>
                            <div class="row  text-wrap">
                                <div class="d-flex justify-content-center">
                                    <div><select onChange={this.handleChoose} class="mb-3 ml-lg-3">
                                        <option value="0">Category</option>
                                        {this.state.categories.map(item =>
                                            <option value={item.id}>{item.category_name}</option>
                                        )}
                                    </select>
                                    </div>
                                </div>
                                <br></br>
                            </div>
                            <div></div>
                            <h5 >Title:</h5>
                            <textarea type="text" name="title" onChange={this.handleChange} style={{ "borderColor": "Tomato", "borderRadius": "10px" }} /><br></br>
                            <h5>Blog:</h5>
                            <textarea type="text" name="blog" onChange={this.handleChange} style={{ "borderColor": "Tomato", "borderRadius": "10px" }} /><br></br>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-success mt-3 mx-1" style={{ "borderRadius": "10px" }} onClick={this.handleClick}>Make a Blog</button>
                                <button class="btn btn-success mt-3 mx-1" style={{ "borderRadius": "10px" }} onClick={this.handleClick}>Make a Blog</button>
                            </div>
                        </div>
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

export default connect(mapStateToProps)(Create)
