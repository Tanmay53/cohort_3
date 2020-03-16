import React, { Component } from 'react'
import axios from 'axios'

export default class Editbook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bookTitle: "",
            Author: "",
            Publisher: "",
            category: "",
            authorid: 1,
            categoryid: 1,
            authorslist: [],
            categorylist: [],
            displaycategories: []
        }
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: `http://localhost:5000/editdata/editbook/${this.props.match.params.id}`,
        })
            .then((res) => {
                console.log(res)
                let temp1 = []
                let temp3 = []
                if (res.data.data.Authors != null) {
                    let temp = res.data.data.Authors.split(",").map((ele) => ele)
                    temp1 = []
                    for (let i = 1; i <= temp.length; i++) {
                        temp1.push({ "id": i, "data": temp[i - 1] })
                    }
                }
                else {
                    temp1 = []
                }
                if (res.data.data.categories != null) {
                    let temp2 = res.data.data.categories.split(",").map((ele) => ele)
                    temp3 = []
                    for (let i = 1; i <= temp2.length; i++) {
                        temp3.push({ "id": i, "data": temp2[i - 1] })
                    }

                }
                else {
                    temp3 = []
                }
                console.log(temp1, temp3)
                this.setState({
                    displaycategories: res.data.category,
                    authorslist: temp1,
                    categorylist: temp3,
                    bookTitle: res.data.data.title,
                    Publisher: res.data.data.publishername

                })
            })
            .catch((res) => {
                console.log("error")
            })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addmoreauthors = () => {
        if (this.state.Author != "") {
            let temp = this.state.authorslist
            if (temp.length == 0) {
                var id = 0
            }
            else {
                id = this.state.authorslist[this.state.authorslist.length - 1]['id']
            }
            let tempele = {
                id: id + 1,
                data: this.state.Author
            }
            temp.push(tempele)
            this.setState({
                authorslist: temp
            })
        }
        else {
            alert("please fill the field")
        }

    }
    handleClick = () => {

        let temp = {
            title: this.state.bookTitle,
            author: this.state.authorslist,
            category: this.state.categorylist,
            publisher: this.state.Publisher
        }
        axios({
            method: 'POST',
            url: `http://localhost:5000/editdata/update/${this.props.match.params.id}`,
            data: temp,
        })
            .then((res) => {
                console.log(res)
                this.props.history.push("/dashboard")
            })
            .catch((res) => {
                console.log(res)
            })
    }
    addcategories = () => {
        if (this.state.category != "") {
            let temp = this.state.categorylist
            if (temp.length == 0) {
                var id = 0
            }
            else {
                id = this.state.categorylist[this.state.categorylist.length - 1]['id']
            }
            let tempele = {
                id: id + 1,
                data: this.state.category
            }
            temp.push(tempele)
            this.setState({
                categorylist: temp
            })
        }
        alert("please select category")
    }
    removeauthor = (id) => {
        let temp = this.state.authorslist.filter((ele) => ele.id != id)
        this.setState({
            authorslist: temp
        })
    }
    removecategory = (id) => {
        let temp = this.state.categorylist.filter((ele) => ele.id != id)
        this.setState({
            categorylist: temp
        })
    }
    render() {
        console.log(this.state)
        return (
            <div className="container d-flex justify-content-center">
                <div className="col-6">
                    <div className="col-12">
                        <label>
                            Book title
                        </label>
                        <div className="col-12">
                            <input type="text" className="col-12 form-control" name="bookTitle" value={this.state.bookTitle} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="col-12">
                        <label>
                            Author Name
                        </label>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-8">
                                    <input type="text" className="form-control col-12" name="Author" value={this.state.Author} onChange={this.handleChange} />
                                </div>
                                <div className="col-4">
                                    <button className="btn btn-info" onClick={this.addmoreauthors}>Add authors</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 m-3 border">
                        <div className='row'>
                            {this.state.authorslist.map((ele) => <div key={ele.id}><div className="p-2 border">{ele.data}<button className="btn btn-danger" onClick={() => this.removeauthor(ele.id)}> X</button></div></div>)}
                        </div>

                    </div>
                    <div className="col-12">
                        <label>
                            Publishers
                        </label>
                        <div className="col-12">
                            <input className="col-12 form-control" type="text" name="Publisher" value={this.state.Publisher} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="col-12">
                        <label>
                            Categories
                        </label>
                        <div className="col-12">
                            <select className="col-12 btn btn-info" onChange={this.handleChange} onClick={this.addcategories} name="category" value={this.state.category}>
                                <option>Select</option>
                                {this.state.displaycategories.map((ele) =>
                                    <option key={ele} value={ele}>{ele}</option>
                                )}
                            </select>
                        </div>
                        <div className="col-12 m-3 border">
                            <div className='row'>
                                {this.state.categorylist.map((ele) => <div key={ele.id}><div className="p-2 border">{ele.data}<button className="btn btn-danger" onClick={() => this.removecategory(ele.id)}>X</button></div></div>)}
                            </div>

                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <button className="btn btn-success" onClick={this.handleClick}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
