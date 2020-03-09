import React from 'react'
import ComboBox from '../components/ComboBox'
import axios from 'axios'
import uuid from 'react-uuid'

class Book extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            book_name: '',
            selected_author_ids: [],
            selected_publisher_ids: [],
            selected_category_ids: [],
            toggler: false,
            display_data: []
        }
    }

    handleChange = (event) => {
        // console.log(event.target.value)
       this.setState({
           [event.target.name]: event.target.value
       })

        console.log(this.state.book_name)
    }   

    loadAllData = () => {        
        axios.get('http://localhost:5000/book/book/fetch/all')
        .then(res => {
            this.setState({
                display_data: res['data']['data']
            })
        })
    }

    

    handleCreate = () => {
        console.log('working : ', this.state)

        if (this.state.selected_author_ids.length == 0 || 
            this.state.selected_category_ids.length == 0 ||
            this.state.selected_publisher_ids.length == 0 ||
            this.state.book_name == '')
            return
        
        // save book
        axios.defaults.headers = {
            'Content-Type': 'application/json'
        }
        axios.post('http://localhost:5000/book/book/create', {
            "book_title"  : this.state.book_name,
            "uuid"        : uuid(),
            "publisher_id": this.state.selected_publisher_ids[0],
            "author_ids": this.state.selected_author_ids,
            "category_ids": this.state.selected_category_ids
        }).then(res => {
            // load data after insert
            this.loadAllData()
            this.setState({
                toggler: !this.state.toggler,
                selected_author_ids: [],
                selected_publisher_ids: [],
                selected_category_ids: [],
                book_name: ''
            })
        }).catch (err => {
            console.log(err)
        })

        
            
    }

        handleAddAuthorId = (data) => {
            let flag = false

            for(let i = 0; i < this.state.selected_author_ids.length; i++) {
                if(this.state.selected_author_ids[i] === data) {
                    flag = true      
                }
            }

            if(flag) {
                this.setState({
                    selected_author_ids: this.state.selected_author_ids.filter((item) => {
                        return item !== data
                    })
                })
            } else {
                this.setState({
                    selected_author_ids: [...this.state.selected_author_ids, data]
                })
            }        
        }
        handleAddPublisherId = (data) => {
            let flag = false

            for(let i = 0; i < this.state.selected_publisher_ids.length; i++) {
                if(this.state.selected_publisher_ids[i] === data) {
                    flag = true       
                }
            }

            if(flag) {
                this.setState({
                    selected_publisher_ids: this.state.selected_publisher_ids.filter((item) => {
                        return item !== data
                    })
                })
            } else {
                this.setState({
                    selected_publisher_ids: [...this.state.selected_publisher_ids, data]
                })
            }        
        }
        handleAddCategoryId = (data) => {
            let flag = false

            for(let i = 0; i < this.state.selected_category_ids.length; i++) {
                if(this.state.selected_category_ids[i] === data) {
                    flag = true       
                }
            }

            if(flag) {
                this.setState({
                    selected_category_ids: this.state.selected_category_ids.filter((item) => {
                        return item !== data
                    })
                })
            } else {
                this.setState({
                    selected_category_ids: [...this.state.selected_category_ids, data]
                })
            } 
        }        
    
    handleDeleteBook = (book_id) => {
        console.log(book_id)
        axios.delete('http://localhost:5000/book/book/delete/' + book_id)
        .then(res => {
            console.log(res)
            if (res['data']['result'] === 'success') {
                this.setState({
                    display_data: this.state.display_data.filter((item) => {
                        return item.book_id !== book_id
                    })
                })
            }
        })
    }

    componentDidMount = () => {
        this.loadAllData()
    }
    
    render() {
        return (
            <>
                <div className='row mt-3'>
                    <div className='col-2'>
                        <label>Book Name</label> 
                    </div>
                    <div className='col-8'>
                        <input 
                            name='book_name'
                            onChange={this.handleChange}
                            type='text' 
                            className='form-control'
                            placeholder="Enter book name"
                            value={this.state.book_name}
                        ></input>
                    </div>
                    <div className='col-2'>
                        <button onClick={this.handleCreate} className='btn btn-primary'>
                            create
                        </button>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-4'>
                        <b>Pick Author</b>
                        <ComboBox callbackRetriveData={this.handleAddAuthorId} viewToggler={this.state.toggler} fetchUrl={'http://localhost:5000/book/author/select'} />
                    </div>
                    <div className='col-4'>
                        <b>Pick Publisher</b>
                        <ComboBox callbackRetriveData={this.handleAddPublisherId} viewToggler={this.state.toggler} fetchUrl={'http://localhost:5000/book/publisher/select'} />
                    </div>
                    <div className='col-4'>
                        <b>Pick Category</b>
                        <ComboBox callbackRetriveData={this.handleAddCategoryId} viewToggler={this.state.toggler} fetchUrl={'http://localhost:5000/book/category/select'} />
                    </div>
                </div>
                <div className='row mt-3'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Title</th>
                                <th>Publisher</th>
                                <th>Category</th>
                                <th>Author</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.display_data.map((item, index) => {
                                return <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.book_title}</td>
                                            <td>{item.publisher}</td>
                                            <td>{item.categories}</td>
                                            <td>{item.authors}</td>
                                            <td><a onClick={() => this.handleDeleteBook(item.book_id)} href="#">delete</a></td>
                                        </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default Book