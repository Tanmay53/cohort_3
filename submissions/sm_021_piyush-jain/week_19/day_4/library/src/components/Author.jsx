import React from 'react'
import axios from "axios"
class Author extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            authors: [],
            book: "",
            author: ""
        }
    }
    componentDidMount = async () => {
        await axios.get("http://127.0.0.1:5000/allBooks")
            .then(res => this.setState({
                books: res.data
            }))
        await axios.get("http://127.0.0.1:5000/allAuthors")
            .then(res => this.setState({
                authors: res.data
            }))
    }
    handleBook = (e) => {
        this.setState({
            book: e.target.value
        })
    }

    handleAuthor = (e) => {
        this.setState({
            author: e.target.value
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // handleClick = () => {

    // }
    handleSubmit = () => {
        axios.get(`http://127.0.0.1:5000/addAuthor/${this.state.book}/${this.state.author}`)
            .then(res => console.log(res))
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <h2 class="text-center mt-5"><i>Add Author to an existing book</i></h2>
                <div class="m-5">
                    <select onChange={this.handleBook} name="book" class="bg-primary text-white">
                        <option>Choose Book</option>
                        {this.state.books.map((item, index) => <option value={item.id} key={index}>{item.name}</option>)}
                    </select>

                    <select onChange={this.handleAuthor} name="author" class="bg-primary text-white">
                        <option>Choose Author</option>
                        {this.state.authors.map((item, index) => <option value={item.auth_name} key={index}>{item.auth_name}</option>)}
                    </select>
                    <button onClick={this.handleSubmit} class=" btn btn-primary text-white">Submit</button>
                </div>
                <div>
                    {/* <select onChange={this.handleBook} name="book" class="bg-primary text-white">
                        <option>Choose Book</option>
                        {this.state.books.map((item, index) => <option value={item.id} key={index}>{item.name}</option>)}
                    </select>
                    <input type="text" placeholder="Enter new Author" class="form-control" name="author" onChange={this.handleChange} />
                    <button onClick={this.handleSubmit} class="btn btn-primary text-white">Add</button> */}

<h2 class="text-center"><i>Or  add a new AUTHOR</i></h2>

                    <select onChange={this.handleBook} name="book" class="bg-primary text-white mx-5 my-3">
                        <option>Choose Book</option>
                        {this.state.books.map((item, index) => <option value={item.id} key={index}>{item.name}</option>)}
                    </select>

                    <div class="input-group mx-5">
                        <div class="input-group-prepend">
                            <input type="text" placeholder="Enter new Author for Book" class="form-control" name="author" onChange={this.handleChange} />
                        </div>
                        <button onClick={this.handleSubmit} class="btn btn-danger text-white">Add</button>
                    </div>



                </div>
            </React.Fragment>
        )
    }
}
export default Author
