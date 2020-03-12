import React, { Component } from 'react'
import Axios from 'axios'

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            placeholder:'select option',
            query:'',
            bookdata:[]
        }
    }

    handleChange = e =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSearchAuthor = () =>{
        this.setState({
            placeholder:'author'
        })
    }

    handleSearchPublication = () =>{
        this.setState({
            placeholder:'publication'
        })
    }

    handleSearchCategory = () =>{
        this.setState({
            placeholder:'category'
        })
    }

    findBooks = () =>{
        let value = this.state.placeholder
        switch(value){
            case 'author':
                    Axios.get(`http://127.0.0.1:5000/search/author/${this.state.query}`)
                    .then(res => 
                            this.setState({
                                bookdata:res.data.result
                            })
                        )
                    break
            case 'publication':
                    Axios.get(`http://127.0.0.1:5000/search/publication/${this.state.query}`,{
                        publisher:this.state.query
                    })
                    .then(res =>
                            this.setState({
                                bookdata:res.data.result
                            })
                        )
                    break
            case 'category':
                    Axios.get(`http://127.0.0.1:5000/search/category/${this.state.query}`,{
                        category:this.state.query
                    })
                    .then(res => 
                            this.setState({
                                bookdata:res.data.result
                            })
                        )
                    break
            default:
                    console.log('Invalid Case')
        }
    }

    render() {
        console.log(this.state.query)
        console.log(this.state.placeholder)
        return (
            <div>
                    <div className="input-group mx-auto" style={{width:'max-content'}}>
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Search By:</span>
                                <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.state.placeholder}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <option className="dropdown-item" onClick={() => this.handleSearchAuthor()} value='author'>Author</option>
                                    <option className="dropdown-item" onClick={() => this.handleSearchPublication()} value='publication'>Publication</option>
                                    <option className="dropdown-item" onClick={() => this.handleSearchCategory()} value='category'>Category</option>
                                </div>
                            </div>
                            <input type="text" className="form-control" placeholder={this.state.placeholder} value={this.state.query} onChange={this.handleChange} aria-label="content" id='query' aria-describedby="basic-addon1"></input>
                            <button className='mx-1 btn btn-outline-danger' onClick={() => this.findBooks()}>Enter</button>
                        </div>
                    </div>
                    
                    <table className={`my-5 mx-auto`} >
                    <thead>
                        <tr>
                            <th className='px-5 py-3'>BookId</th>
                            <th className='px-5 py-3'>BookName</th>
                            <th className='px-5 py-3'>Publisher</th>
                            <th className='px-5 py-3'>Author</th>
                            <th className='px-5 py-3'>Category</th>
                            <th className='px-5 py-3'>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.bookdata.map(book =>
                        <tr className='text-wrap'>
                            <td className='px-3 py-3'>{book}</td>
                            <td className='px-3 py-3'>{this.state.finalBookname}</td>
                            <td className='px-3 py-3'>{this.state.finalPublisher}</td>
                            <td className='px-3 py-3 text-wrap'>
                              
                            </td>
                            <td className='px-3 py-3'>
                                
                            </td>
                        </tr>
                        )}
                    </tbody>
                    </table>
            </div>
        )
    }
}
