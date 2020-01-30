import React from 'react'
import axios from 'axios'
import Navbar from './Navbar'

export default class Delete extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id : 0,
            name : '',
            quantity : ''
        }
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search)
        let name = query.get('name')
        let quantity = query.get('quantity')
        let id = query.get('id')

        this.setState({
            id : id,
            name : name,
            quantity : quantity
        })
    }

    deleteItem = () =>{
        let id = this.state.id
        axios.post('http://127.0.0.1:5000/delete',{
            'item_no':id
        })
            .then(res => console.log('item deleted'))
            .then(res => this.props.history.push('/home'))
    }

    render(){
        return (
            <div className='container'>
                        <Navbar />
                        <div className='container mt-5'> 
                            <label htmlFor='name'>Item Name:
                                <input type='text' id='name' className='p-2 m-2'  name='name' value={this.state.name} disabled/>
                            </label>
                            <label htmlFor='quantity'>Quantity:
                                <input type='text' id='quantity' className='px-2 py-2 m-2'  name='quantity' value={this.state.quantity} disabled/>
                            </label>
                            <br/>
                            <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">
                                Delete
                            </button>
        
        
                            {/* Model */}
                            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalCenterTitle">Delete Item</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    Are you sure, you want to delete? 
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>this.deleteItem()}>Yes, Sure</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
        )
    }
}
