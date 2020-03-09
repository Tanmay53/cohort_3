import React from 'react'
import Manager from '../components/Manager'

class Author extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data_store: [],
            author: {
                display_name:'Author', 
                select_url: 'http://localhost:5000/book/author/select',
                create_url: 'http://localhost:5000/book/author/create', 
                edit_url: 'http://localhost:5000/book/author/update', 
                delete_url: 'http://localhost:5000/book/author/delete'
            }
        }
    }

    handleLoad = (data) => {
        this.setState({
            data_store: [...this.state.data_store, ...data]
        })
    }

    handleCreate = (data) => {
        this.setState({
            data_store: [...this.state.data_store, data]
        })
    }

    handleUpdate = (data) => {
        this.setState({
            data_store: this.state.data_store.map((item) => {
                if (item.uuid == data.uuid) 
                    return data
                else
                    return item
            })
        })

    }

    handleDelete = (data) => {
        this.setState({
            data_store: this.state.data_store.filter((item) => {
                return item.uuid != data.uuid
            })
        })

    }


    render() {
        return (
            <>  
                <Manager 
                    data={this.state.author} 
                    store={this.state.data_store}
                    callBackHandleLoad={this.handleLoad}
                    callBackHandleCreate={this.handleCreate}
                    callBackHandleDelete={this.handleDelete} 
                    callBackHandleUpdate={this.handleUpdate}                      
                    />
            </>
        )
    }
}

export default Author