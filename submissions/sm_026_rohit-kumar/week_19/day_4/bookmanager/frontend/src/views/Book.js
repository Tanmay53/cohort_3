import React from 'react'
import ComboBox from '../components/ComboBox'

class Book extends React.Component {
    constructor(props) {
        super(props)
        this.setState = {
            selected_author_ids: [],
            selected_publisher_ids: [],
            selected_category_ids: []
        }
    }

    handleCreate = () => {
        if (this.state.selected_author_ids.length == 0 || 
            this.state.selected_category_ids.length == 0 ||
            this.state.selected_publisher_ids.length == 0)
            return
        console.log(this.state)
    }

    handleAddAuthorId = (data) => {
        this.setState({
            selected_author_ids: [...this.state.selected_author_ids, data]
        })
    }
    handleAddPublisherId = (data) => {
        this.setState({
            selected_author_ids: [...this.state.selected_publisher_ids, data]
        })
        
    }
    handleAddCategoryId = (data) => {
        this.setState({
            selected_author_ids: [...this.state.selected_category_ids, data]
        })
        
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
                            type='text' 
                            className='form-control'
                            placeholder="Enter book name"
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
                        <ComboBox callbackRetriveData={this.handleAddAuthorId} fetchUrl={'http://localhost:5000/book/author/select'} />
                    </div>
                    <div className='col-4'>
                        <b>Pick Publisher</b>
                        <ComboBox callbackRetriveData={this.handleAddPublisherId} fetchUrl={'http://localhost:5000/book/publisher/select'} />
                    </div>
                    <div className='col-4'>
                        <b>Pick Category</b>
                        <ComboBox callbackRetriveData={this.handleAddCategoryId} fetchUrl={'http://localhost:5000/book/category/select'} />
                    </div>
                </div>
            </>
        )
    }
}

export default Book