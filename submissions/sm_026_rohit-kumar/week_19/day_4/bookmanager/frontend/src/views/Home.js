import React from 'react'
import axios from 'axios'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display_data: [],
            search: ''
        }
    }

    loadAllData = (searchParam) => {        
        axios.post('http://localhost:5000/book/book/fetch/searched', {
            searchParam: searchParam
        }).then(res => {
            console.log(res)
            this.setState({
                display_data: res['data']['data']
            })
        })

        console.log(this.state )
    }

    handleSearchClick = () => {
        this.loadAllData(this.state.search)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    
    render() {
        return (
            <>
            <div className='row mt-3'>
                <div className='col-md-8 offset-md-1'>
                    <input 
                        name='search'
                        onChange={this.handleChange}
                        type='text' 
                        value={this.state.search}
                        className='form-control'
                        placeholder="Search by Book Title, Author, Publisher or Category."
                        ></input>
                </div>
                <div className='col-2'>
                    <button onClick={this.handleSearchClick} className='btn btn-primary'>
                        <i class="fa fa-search" style={{"fontSize":"15px"}}></i>
                        &nbsp; Search
                    </button>
                </div>
            </div>
            <div className='row mt-5'>

            {this.state.display_data.length > 0 &&
                <table className='table'>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Title</th>
                            <th>Publisher</th>
                            <th>Category</th>
                            <th>Author</th>
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
                                    </tr>
                        })}
                    </tbody>
                </table>}
        </div>
        </>
        )
    }
}

export default Home