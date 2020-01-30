import React from 'react'
import axios from 'axios'
import Navbar from './Navbar'

export default class Edit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id : 0,
            name : '',
            quantity:''
        }
    }

    handleChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search)
        let name = query.get('name')
        let quantity = query.get('quantity')
        let id = query.get('id')    
        console.log(name,quantity)

        this.setState({
            name:name,
            quantity:quantity,
            id : Number(id)
        })
    }

    editItem = () =>{
        let id = this.state.id
        let item_name = this.state.name
        let quantity = this.state.quantity
        console.log(item_name,quantity)

        axios.post(`http://127.0.0.1:5000/edit/${id}`,{
            'item':item_name,
            'quantity':quantity
        })
            .then(res => console.log(res.data))
            .then(res => this.props.history.push('/home'))
    }



    render(){
        return (
            <div className='container'>
                <Navbar />
                    <div className='container mt-5'>
                        <label htmlFor='name'>Item Name:
                        <input type='text' id='name' className='p-2 m-2'  name='name' value={this.state.name} onChange={(e)=>this.handleChange(e)}/>
                        </label>
                        <label htmlFor='quantity'>Quantity:
                        <select name='quantity' id='quantity' className='p-2 m-2' value={this.state.quantity} onChange={(e)=>this.handleChange(e)}>
                            <option value='5'>5</option>
                            <option value='10'>10</option>
                            <option value='15'>15</option>
                            <option value='20'>20</option>
                            <option value='25'>25</option>
                        </select>
                        </label>
                        <br/>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                            Edit
                        </button>


                        {/* Model */}
                        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Edit Item</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Are you sure, you want to make change? 
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>this.editItem()}>Yes, Sure</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        )
    }
}
