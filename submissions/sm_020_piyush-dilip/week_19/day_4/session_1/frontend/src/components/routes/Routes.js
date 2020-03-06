import React, { Component } from 'react'
import axios from 'axios'
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';

export class Routes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            authorname : '',
            category : '',
            bookname : '',
            authors : [],
            categories : [],
            showAuthors : false,
            showCtg : false,
            publisher : '',
            books : []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = ( input, searchBy, api) => {
        console.log(input, searchBy, api)
        axios({
            method : 'get',
            baseURL: `http://127.0.0.1:5000/${api}`,
            data : { searchBy : input}
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    addAuthor = () => {
        if(this.state.authorname != ''){
        this.setState({
            authors : [...this.state.authors, this.state.authorname],
            authorname : '',
            showAuthors : true
        })
    }
    }

    addCategory = () => {
        if(this.state.category != ''){
        this.setState({
            categories : [...this.state.categories, this.state.category],
            category : '',
            showCtg : true
        })
    }
    }

    deleteAuthor = (author) => {
        this.setState({
            authors : this.state.authors.filter(a => a != author)
        })
    }

    deleteCtg = (ctg) => {
        this.setState({
            categories : this.state.categories.filter(a => a != ctg)
        })
    }

    addBook = () => {
        axios({
            method : 'post',
            baseURL : `http://127.0.0.1:5000/books/create`,
            data : {
                bookname : this.state.bookname,
                authors : this.state.authors,
                categories : this.state.categories,
                publisher : this.state.publisher
            }
        })
        .then(res => console.log(res))
    }

    render() {
        return (
            <div className="container-fluid" >
                <div className="text-center my-2 h1 font-weight-bold">Library</div>
                <div className="row p-2">
                    <div className="col-12 col-md-6  col-lg-3">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-searchByName" role="tab" aria-controls="v-pills-searchByNamsearchByAuthor" aria-selected="true">SEARCH BY NAME</a>
                            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-searchByAuthor" role="tab" aria-controls="v-pills-searchByAuthor" aria-selected="false">SEARCH BY AUTHOR</a>
                            <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-searchByCategory" role="tab" aria-controls="v-pills-searchByCategory" aria-selected="false">SEARCH BY CATEGORY</a>
                            <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-searchByPublisher" role="tab" aria-controls="v-pills-searchByPublisher" aria-selected="false">SEARCH BY PUBLISHER</a>
                            <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-addBook" role="tab" aria-controls="v-pills-addBook" aria-selected="false">ADD BOOK</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-9">
                        <div className="tab-content" id="v-pills-tab">
                            <div className="tab-pane fade show active" id="v-pills-searchByName" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div  className="w-75 p-2">
                                    <label htmlFor="bookname">SEARCH BY NAME</label>
                                    <input type="text" id="bookname" value={this.state.bookname} onChange={this.handleChange} className="form-control mb-2" />
                                    <button className="btn btn-primary btn-block bookname" onClick={() => this.handleSubmit(this.state.bookname, "bookname", 'book')}>Get Books</button>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-searchByAuthor" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <div  className="w-75 p-2">
                                    <label htmlFor="authorname">SEARCH BY AUTHOR</label>
                                    <input type="text" id="authorname" value={this.state.authorname} onChange={this.handleChange} className="form-control mb-2" />
                                    <button className="btn btn-primary btn-block authorname"  onClick={() => this.handleSubmit(this.state.authorname, "authorname", 'author')}>Get Books</button>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-searchByCategory" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                <div  className="w-75 p-2">
                                    <label htmlFor="category">SEARCH BY CATEGORY</label>
                                    <input type="text" id="category" value={this.state.category} onChange={this.handleChange} className="form-control mb-2" />
                                    <button className="btn btn-primary btn-block category" onClick={() => this.handleSubmit(this.state.category, "category", 'category')}>Get Books</button>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-searchByPublisher" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                <div  className="w-75 p-2">
                                    <label htmlFor="publisher">SEARCH BY PUBLISHER</label>
                                    <input type="text" id="publisher" value={this.state.publisher} onChange={this.handleChange} className="form-control mb-2" />
                                    <button className="btn btn-primary btn-block category" onClick={() => this.handleSubmit(this.state.category, "category", 'category')}>Get Books</button>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-addBook" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                    <label htmlFor="bookname">Book name</label>
                                    <input type="text" id="bookname" value={this.state.bookname} onChange={this.handleChange} className="form-control mb-2" />
                                    <label htmlFor="authorname">Author name</label>
                                    <input type="text" id="authorname" value={this.state.authorname} onChange={this.handleChange} className="form-control mb-2" />
                                    <button className="btn btn-block btn-outline-primary" onClick={this.addAuthor}>Add author</button>
                                    <label htmlFor="category">Category</label>
                                    <input type="text" id="category" value={this.state.category} onChange={this.handleChange} className="form-control mb-2" />
                                    <button className="btn btn-block btn-outline-primary" onClick={this.addCategory}>Add category</button>
                                    <label htmlFor="publisher">Publisher</label>
                                    <input type="text" id="publisher" value={this.state.publisher} onChange={this.handleChange} className="form-control mb-2" />
                                    <button className="btn btn-block btn-primary" onClick={this.addBook}>ADD BOOK </button>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {this.state.showAuthors && this.state.authors.length > 0 ? <div className="font-weight-bold">Authors added</div>  : null}
                                            <div className="d-flex flex-wrap">
                                                {this.state.authors.map(author =>
                                                <Chip
                                                    key={author}
                                                    avatar={<Avatar>{author[0]}</Avatar>}
                                                    label={author}
                                                    onDelete={() => this.deleteAuthor(author)}
                                                    color="secondary"
                                                    className="m-1"
                                                />
                                                )}
                                            </div>
                                        
                                            {this.state.showCtg && this.state.categories.length > 0 ? <div className="font-weight-bold">Categories added</div>  : null}
                                            <div className="d-flex flex-wrap">
                                                {this.state.categories.map(ctg =>
                                                    <Chip
                                                    key={ctg}
                                                    avatar={<Avatar>{ctg[0]}</Avatar>}
                                                    label={ctg}
                                                    onDelete={() => this.deleteCtg(ctg)}
                                                    color="primary"
                                                    className="m-1"
                                                />
                                                )}
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">

                
                {
                    this.state.books && this.state.books.map( book => 
                        <div className="col-12 col-md-6 col-lg-4 p-2" key={book.bookname} >
                            <img src="https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="img-thumbnail" />
                    <h5 className="font-weight-bold">{book.bookname}</h5>
                        </div>
                        )
                }
                </div>
            </div>
        )
    }
}

export default Routes
