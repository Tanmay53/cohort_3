import React from 'react'
import axios from "axios"
class Book extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            searchBook: "",
            searchAuthor: "",
            searchPub: "",
            category: [],
            updateBook: "",
            updatePub: "",
            updateId: 0
        }
    }
    // get the books and categories at first
    componentDidMount = async () => {
        await axios.get("http://127.0.0.1:5000/allBooks")
            .then(res => this.setState({
                books: res.data
            }))
        await axios.get("http://127.0.0.1:5000/allCategory")
            .then(res => this.setState({
                category: res.data
            }))
    }
    // changing the inputs
    handlechange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // setting entry details for update
    handleUpdate = (item, name, publisher) => {
        this.setState({
            updateBook: name,
            updatePub: publisher,
            updateId: item
        })

        console.log("called", item)
    }
    // function to delete book and call an axios request for new table entr
    handleDelete = async (item) => {
        await axios.get(`http://127.0.0.1:5000/deleteBook/${item}`)

        await axios.get("http://127.0.0.1:5000/allBooks")
            .then(res => this.setState({
                books: res.data
            }))

    }

    // function to sort the table
    handleCategory = async (e) => {
        await axios.get(`http://127.0.0.1:5000/sortCategory/${e.target.value}`)
            .then(res => this.setState({
                books: res.data
            }))
    }

    // function to search for the avialability of book and change table
    searchBook = async () => {
        await axios.get(`http://127.0.0.1:5000/searchBook/${this.state.searchBook}`)
            .then(res => this.setState({
                books: res.data
            }))
    }

    // function to search for the avialability of author and change table
    searchAuthor = async () => {
        await axios.get(`http://127.0.0.1:5000/searchAuthor/${this.state.searchAuthor}`)
            .then(res => this.setState({
                books: res.data
            }))
    }

    // function to search for the avialability of Publisher and change table
    searchPub = async () => {
        await axios.get(`http://127.0.0.1:5000/searchPublisher/${this.state.searchPub}`)
            .then(res => this.setState({
                books: res.data
            }))
    }
    // function to send updated data to DB 
    updatedBook = async () => {
        await axios({
            method: 'POST',
            url: `http://127.0.0.1:5000/updateBook/${this.state.updateId}`,
            data: {
                updateBook: this.state.updateBook,
                updatePub: this.state.updatePub,
            }
        })
            .then(res => console.log(res))

        await axios.get("http://127.0.0.1:5000/allBooks")
            .then(res => this.setState({
                books: res.data
            }))
    }

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">Update Entry</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <input type="text" name="updateBook" placeholder={this.state.updateBook} value={this.state.updateBook} onChange={this.handlechange} />
                                <input type="text" name="updatePub" placeholder={this.state.updatePub} value={this.state.updatePub} onChange={this.handlechange} />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={this.updatedBook}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

<h4 class="text-center my-5 text-danger"><i>Library management is a sub-discipline of institutional management that focuses on specific issues faced by libraries and library management professionals. Library management encompasses normal managerial tasks, as well as intellectual freedom and fundraising responsibilities.</i></h4>
<div >
                <div class="input-group m-5">
                    <div class="input-group-prepend">
                    <input type="text" class="form-control" name="searchBook" placeholder="Search by book" onChange={this.handlechange}></input>
                    </div>
                        <button class="btn btn-primary" onClick={this.searchBook}>Search</button> 
                </div>

                <div class="input-group m-5">
                    <div class="input-group-prepend">
                        <input type="text" name="searchAuthor"class="form-control" placeholder="Search by Author" onChange={this.handlechange}></input>
                    </div>
                    <button class="btn btn-primary" onClick={this.searchAuthor}>Search</button>
                </div>


                <div class="input-group m-5" >
                    <div class="input-group-prepend">
                        <input type="text" class="form-control" name="searchBook" placeholder="Search by book" onChange={this.handlechange}></input>
                    </div>
                    <button class="btn btn-primary" onClick={this.searchPub}>Search</button>
                </div>


                <select onChange={this.handleCategory} class="bg-primary text-white mx-5 my-2">
                    <option value="0">Filter</option>
                    {this.state.category.map((item, index) =>
                        <option value={index + 1} key={index}>{item.name}</option>)}
                </select>

</div>

                {this.state.books.length !== 0 ?
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered table-hover">
                            <thead class="thead-dark">
                                <tr >
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Publisher</th>
                                    <th>Author/Authors</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.books.map((item, index) =>
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.publisher}</td>
                                        <td>{item.authors}</td>
                                        <td><button class="btn btn-outline-warning" type="button" data-toggle="modal" data-target="#exampleModalCenter" onClick={(e) => this.handleUpdate(item.id, item.name, item.publisher)}>Update</button></td>
                                        <td><button class="btn btn-outline-danger" onClick={(e) => this.handleDelete(item.id)}>Delete</button></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    : <div><h3 class="text-center text-danger">No Data</h3></div>}
            </React.Fragment>
        )
    }
}
export default Book
