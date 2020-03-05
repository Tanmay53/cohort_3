import React from 'react'
import axios from "axios"
import { Link, Connector, Redirect } from "react-router-dom"
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
        var token = localStorage.getItem("token")
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
        var token = localStorage.getItem("token")
        await axios({
            method: 'post',
            url: `http://127.0.0.1:5000/makeBlog/${this.state.user_id}/${this.state.cat_id}`,
            headers: { 'Authorization': `Bearer ${token}` },
            data: {
                "title": this.state.title,
                "blog": this.state.blog,
                "date": this.state.date
            }
        })
            .then(this.props.history.goBack)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        console.log(this.state)
        if (localStorage.getItem("token")) {
            return (
                <React.Fragment>
                    <div class="d-flex justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
                    <div  style={{"marginTop":"10%","border":"2px solid black","width":"50%"}} class="p-3">
                        <h2 style={{"color":"Tomato"}} class="text-center mb-3">CREATE A BLOG</h2>
                            {/* <label>Title:</label><br></br>
                            <textarea type="text" name="title" onChange={this.handleChange} /><br></br>
                            <label>Date:</label><br></br>
                            <input type="date" name="date" onChange={this.handleChange} />
                            <select onChange={this.handleChoose}>
                                <option value="0">Category</option>
                                {this.state.categories.map(item =>
                                    <option value={item.id}>{item.category_name}</option>
                                )}
                            </select><br></br>
                            <label>BLOG:</label><br></br>
                            <textarea type="text" name="blog" onChange={this.handleChange} /><br></br>
                            <button class="btn btn-success" onClick={this.handleClick}>Make a Blog</button> */}
                            <div class="row ml-3">
                                <div>
                                    <h5>Date</h5>
                                    <input type="date" name="date" onChange={this.handleChange}/>
                                </div>
                                <div>
                                    <h5 class="ml-5">Category</h5>
                                    <select onChange={this.handleChoose} class="ml-5">
                                        <option value="0">Category</option>
                                        {this.state.categories.map(item =>
                                            <option value={item.id}>{item.category_name}</option>
                                        )}
                                    </select><br></br>
                                </div>
                            </div>
                            <div></div>
                            <h5 >Title:</h5>
                            <textarea type="text" name="title" onChange={this.handleChange} /><br></br>
                            <h5>BLOG:</h5>
                            <textarea type="text" name="blog" onChange={this.handleChange} /><br></br>
                            <div class="d-flex justify-content-center">
                            <button class="btn btn-success" onClick={this.handleClick}>Make a Blog</button>
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
export default Create
