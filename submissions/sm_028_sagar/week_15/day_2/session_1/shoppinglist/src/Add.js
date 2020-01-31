import React from 'react'
import axios from 'axios'
import Navbar from './Navbar'

export default class add extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : '',
            quantity:'5'
        }
    }

    handleChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = () =>{
        let newItem = {
            'item': this.state.name,
            'quantity': this.state.quantity,
            'purchased': false
        }

        axios.post('http://127.0.0.1:5000/create',newItem)
            .then(res => console.log(res.data.message))
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
                    <button className='btn btn-success' onClick={()=>this.handleClick()}>Add Item</button>
                </div>
            </div>
            
        )
    }
}
