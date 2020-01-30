import React from 'react'
import axios from 'axios'

class EditItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            item: '',
            quantity: 1,
            purchased: 0
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = () => {
        axios.post(`http://localhost:5000/edit/${Number(this.props.match.params.index) + 1}`, this.state)
        .then(function (response) {
            console.log(response);
          })
        .catch((error) => {
            console.log('Error : ', error)
        })

        this.props.history.push('/home')
    }

    componentDidMount = () => {
        const query = new URLSearchParams(this.props.location.search)
        const old_item = query.get('item')
        const old_quantity = query.get('quantity')
        const purchased = query.get('purchased')

        console.log(old_item, old_quantity)

        this.setState({
            item: old_item,
            quantity: Number(old_quantity),
            purchased: Number(purchased)
        })
    }


    render() {
        console.log(this.props)
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <h3>Please update required values</h3>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label>Item</label>
                            <input name='item' onChange={this.handleChange} value={this.state.item} type='text' className='form-control'></input>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label>Quantity</label>
                            <select name='quantity' onChange={this.handleChange} value={this.state.quantity} className='form-control'>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-12'>
                        <button onClick={this.handleClick} className='btn btn-primary'>Update</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditItem