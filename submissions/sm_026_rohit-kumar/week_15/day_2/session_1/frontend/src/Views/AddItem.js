import React from 'react'
import axios from 'axios'

class AddItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            item: '',
            quantity: 1
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = () => {
        axios.post('http://localhost:5000/create', this.state)
        .then(function (response) {
            console.log(response);
          })
        .catch((error) => {
            console.log('Error : ', error)
        })

        this.props.history.push('/home')
    }

    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <h3>Add a new item.</h3>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label>Item</label>
                            <input name='item' onChange={this.handleChange} value={this.state.value} type='text' className='form-control'></input>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label>Quantity</label>
                            <select name='quantity' onChange={this.handleChange} className='form-control'>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-12'>
                        <button onClick={this.handleClick} className='btn btn-primary'>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddItem