import React from 'react'
import axios from "axios"
import { Link,Connector } from "react-router-dom"
class Create extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            user_id:0,
            cat_id: 0,
            title: "",
            blog: "",
            date:0
        }
    }
    componentDidMount = () => {
        var token = localStorage.getItem("token")
        axios.get(`http://127.0.0.1:5000/allCategories`)
            .then(res => this.setState({
                categories: res.data
            }))
            axios.post(`http://127.0.0.1:5000/getId`,{"token":token})
            .then(res => this.setState({
            user_id: Number(res.data)
            }))
    }
    handleChoose = (e) => {
        this.setState({
            cat_id: Number(e.target.value)
        })
    }
    handleClick = () => {
        console.log(this.state)
        axios.post(`http://127.0.0.1:5000/makeBlog/${this.state.user_id}/${this.state.cat_id}`,{"title":this.state.title,"blog":this.state.blog,"date":this.state.date})
        .then(res=>console.log(res))
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div>
                    <select onChange={this.handleChoose}>
                        <option value="0">Choose Category</option>
                        {this.state.categories.map(item =>
                            <option value={item.id}>{item.category_name}</option>
                        )}
                    </select>
                </div>
                <div>
                    <label>Title:</label><input type="text" name="title" onChange={this.handleChange} /><br></br>
                    <label>Date:</label><input type="date" name="date" onChange={this.handleChange} /><br></br>
                    <label>BLOG:</label><input type="text" name="blog" onChange={this.handleChange} /><br></br>
                    <button onClick={this.handleClick}>Make a Blog</button>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default Create
